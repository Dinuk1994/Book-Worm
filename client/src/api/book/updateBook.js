import { createAsyncThunk } from "@reduxjs/toolkit";
export const updateBook = createAsyncThunk(
    "update_book", async ({bookId , upadteDate}, thunkAPI) => {
           try {
            const res = await fetch(`http://localhost:8000/api/book/update-book/${bookId}`,{
                method : "PUT",  
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(upadteDate)  

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