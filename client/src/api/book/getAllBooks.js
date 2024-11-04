import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllBooks = createAsyncThunk(
    "books/getAllBooks",async(allBooks,thunkAPI)=>{
        try {
            const res = await fetch("http://localhost:8000/api/book/get-books",{
                headers :{
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