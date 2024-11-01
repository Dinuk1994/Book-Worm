import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkAuth = createAsyncThunk(
    "checkAuth", async (data, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:8000/api/auth/checkAuth", {
                credentials: "include",
                headers: {
                    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                    "Expires": "0"
                }
            });

            if (!res.ok) {
                throw new Error("Authentication check failed");
            }

            const data = await res.json();
            console.log("Response from checkAuth:", data); 
            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
