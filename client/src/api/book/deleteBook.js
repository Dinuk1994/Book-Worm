import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const deleteBook = createAsyncThunk(
    "delete_book", async (bookId, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:8000/api/book/delete-book/${bookId}`,{
                method : "DELETE"

            })
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.message)
            }
            toast.success("Book Deleted Successfully!")
            return data;
            
        } catch (error) {
            toast.error(error.message)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)