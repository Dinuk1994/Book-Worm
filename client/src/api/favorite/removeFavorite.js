import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const removeFavorite = createAsyncThunk(
    "remove_favorite",async({userId,removeFavData} , thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:8000/api/favorites/remove/${userId}`,{
                method : "DELETE",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(removeFavData)
            })
            const data = await res.json();

            if(!res.ok){
                throw new Error(data.message)
            }

            toast.success("Book Removed from Favorites!")
            return data;
            
        } catch (error) {
            toast.error(error.message)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

