import { Router } from "express";
import usersRouter from "./users.router";
import moviesRouter from "./movies.router";
import {verifyToken} from '../utils/methods/auth.method'

const router = Router();
router.use("/user", usersRouter);
router.use("/movies", verifyToken, moviesRouter);

export default router;
