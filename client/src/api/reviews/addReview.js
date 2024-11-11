import {createAsyncThunk} from "@reduxjs/toolkit"
import { toast } from "react-toastify";

export const addReview = createAsyncThunk(
    "addReview" , async({bookId , reviewData}, thunkAPI)=>{
        try {
            const res = await fetch(`http://localhost:8000/api/review/addReview/${bookId}`,{
               method : "POST",
               headers : {"Content-Type" : "application/json"},
               body :JSON.stringify(reviewData) 
            })

            const data = await res.json();

            if(!res.ok){
                throw new Error(data.message)
            }
            toast.success("Review Added Successfully!")
            return data;
            
        } catch (error) {
            toast.error(error.message)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)