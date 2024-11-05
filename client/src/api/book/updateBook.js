import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const updateBook = createAsyncThunk(
    "update_book", async ({bookId , updatedData}, thunkAPI) => {
           try {
            const res = await fetch(`http://localhost:8000/api/book/update-book/${bookId}`,{
                method : "PUT",  
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(updatedData)  

            })
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.message)
            }

            toast.success("Book Updated Successfully!")
            return data;
            
            
           } catch (error) {
            toast.error(error.message )
            return thunkAPI.rejectWithValue(error.message)
           } 
    }
)