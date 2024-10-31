import express from "express";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs"
import GenerateAccessToken from "../utils/generateAccessToken.js";

export const signin = async(req,res)=>{
    try {
        const {fullName,userName,email,password} = req.body
        if(!fullName || !userName || !email || !password){
            return res.status(400).json({message:"Please fill in all fields."})
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message:"User already exists"})
        }
        if(password.lenght < 6){
            return res.status(400).json({message:"Password must be at least 6 characters"})
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const user = new User({
            fullName,
            userName,
            email,
            password : hashedPassword   
        })
        await user.save()
        res.status(200).json({message:"User created successfully",user})
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({message:"Please fill in all fields."})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Invalid email or password"})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Invalid email or password"})
        }

        const token = GenerateAccessToken(user._id, user.role, user.fullName)
        res.cookie("token",token,{httpOnly:true}).json({msg : "Login successfully",user,token})
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const logout = async(req,res)=>{
    try {
        res.clearCookie("token").json({message:"Logout successfully"})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}