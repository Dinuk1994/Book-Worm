import express from "express";
import { login, logout, signin } from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signin",signin)
authRouter.post("/login",login)
authRouter.get("/logout",logout)


export default authRouter
