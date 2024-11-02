import {createAsyncThunk} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

export const logout = createAsyncThunk(
    "logout", async(data , thunkAPI)=>{
        try {
            const res = await fetch("http://localhost:8000/api/auth/logout",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                    "Expires": "0"
                },
                credentials : "include"
            })

            const data = await res.json();

            if(!res.ok){
                throw new Error(data.error)
            }
            toast.success("Logout Sucessful!")
            return data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)