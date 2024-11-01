import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkAuth = createAsyncThunk(
    "checkAuth", async (thunkAPI) => {
        console.log("Check Auth Started");
        try {
            const res = await fetch("http://localhost:8000/api/auth/checkAuth", {
                credentials: "include",
                headers: {
                    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                    "Expires": "0"
                }
            });

            const data = await res.json();
            console.log("API response:", data); 

            if (!res.ok) {
                throw new Error(data.message || "Authentication check failed");
            }

            return data; 

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
