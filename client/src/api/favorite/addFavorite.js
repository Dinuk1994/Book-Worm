import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const addFavorite = createAsyncThunk(
    "add_favorite",async({userId,favData} , thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:8000/api/favorites/add/${userId}`,{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(favData)
            })

            const data = await res.json();

            if(!res.ok){
                throw new Error(data.message)
            }
            toast.success("Book Added to Favorites!")
            return data;
            
        } catch (error) {
            toast.error(error.message)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)