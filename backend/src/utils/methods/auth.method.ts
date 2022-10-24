import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const bearerHeader = req.headers["authorization"];

    
  if (typeof bearerHeader === "string") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];

    const privateKey = process.env.PRIVATE_KEY;
    jwt.verify(token, privateKey, (err: any, authData: any) => {

        
      if (err) {
        return res.status(401).json({ message: "Unauthorized access" });
      } else {
        next();
      }
    });
  } else {
    return res.status(401).json({ message: "Unauthorized access" });
  }
};

export {verifyToken}