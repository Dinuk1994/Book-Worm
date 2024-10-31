import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const signin = createAsyncThunk(
    "signin", async (registerData, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:8000/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registerData)
            })
            if (!res.ok) {
                throw new Error(data.error)
            }

            const data = await res.json()
            toast.success("Sign-in Sucessful!")

            return data;

        } catch (error) {
            toast.error(`Sign-in failed: ${error.message}`);
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
