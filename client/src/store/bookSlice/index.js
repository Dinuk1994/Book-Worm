import { createSlice } from "@reduxjs/toolkit";
import { addBook } from "../../api/book/addBook";

const initialState = {
    books : {},
    isLoading : true

}

const bookSlice = createSlice({
    name : "book",
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(addBook.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(addBook.fulfilled,(state,action)=>{
            state.isLoading = false
            state.books = action.payload
        })
        .addCase(addBook.rejected,(state)=>{
            state.isLoading = false
        })
    }
})


const bookReducer = bookSlice.reducer
export default bookReducer