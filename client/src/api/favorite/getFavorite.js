import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFavorite = createAsyncThunk(
    "get_favorite",async(userId , thunkAPI) => {
        try {
            //console.log("Get favorite called");
            
            const res = await fetch(`http://localhost:8000/api/favorites/get/${userId}`,{
                headers : {
                    "Content-Type" : "application/json"
                }
            })
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.message)
            }            
            
            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)