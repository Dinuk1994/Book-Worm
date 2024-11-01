import express from "express";
import { login, logout, signin } from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/signin",signin)
authRouter.post("/login",login)
authRouter.post("/logout",logout)
authRouter.get("/checkAuth",authMiddleware,(req,res)=>{
    const user = req.user
    return res.status(200).json({msg : "Authenticated",user})
})

export default authRouter
