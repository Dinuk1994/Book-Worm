import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const login = createAsyncThunk(
    "login",async(loginData , thunkAPI) => {
        try {
            const res = await fetch("http://localhost:8000/api/auth/login",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                    
                },
                body : JSON.stringify(loginData),
                credentials : "include"
            })

            const data = await res.json();

            if(!res.ok){
                throw new Error(data.error);
            }

            toast.success("Login Sucessful!")

            return data;
            
        } catch (error) {
            toast.error("Login Failed!")
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)