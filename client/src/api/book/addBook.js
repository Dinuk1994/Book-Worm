
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const addBook  = createAsyncThunk(
    "add_book",async(bookData , thunkAPI) => {
        try {
            const res = await fetch("http://localhost:8000/api/book/add-book",{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(bookData)

            })
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.message);
            }

            toast.success("Book Added Successfully!")
            return data;
            
        } catch (error) {
            toast.error(error.message)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)