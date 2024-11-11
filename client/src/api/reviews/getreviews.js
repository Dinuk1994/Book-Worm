import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllReviews = createAsyncThunk(
    "getAllReviews", async (bookId, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:8000/api/review/getReview/${bookId}`,{
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