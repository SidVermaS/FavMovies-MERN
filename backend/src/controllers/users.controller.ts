import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import _ from "lodash";
import User from "../models/users.model";
import { loginSchema, registerSchema } from "../validators/users.validator";

const register = async (req: Request, res: Response) => {
  try {
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { email, name, password } = value;
    const user: User = await User.create({
      email,
      name,
      password,
    });
    if (user) {
      return res.status(201).json({
        message: "Successfully registered your account",
      });
    } else {
      return res
        .status(400)
        .json({ message: "Failed to register your account" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to register your account", error });
  }
};
const login = async (req: Request, res: Response) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { email, password } = value;
    const userResult: User = await User.findOne({
      where: {
        email,
      },
    });
    if (userResult) {
      const isPasswordValid = await User.validatePassword(
        password,
        userResult.password
      );

      if (isPasswordValid) {
        const user = _.omit(userResult?.["dataValues"], ["password"]);
        const token = jwt.sign({ data: user }, process.env.PRIVATE_KEY);
        return res.status(200).json({
          message: "Successfully logged to your account",
          user,
          token,
        });
      } else {
        return res.status(400).json({ message: "Password is incorrect" });
      }
    } else {
      return res.status(400).json({ message: "Email is not registered" });
    }
  } catch (error) {
    console.log("~~~ error: ", error);

    return res
      .status(500)
      .json({ message: "Failed to login to your account", error });
  }
};
export { login, register };
