import {createAsyncThunk} from "@reduxjs/toolkit"

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

            return data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)