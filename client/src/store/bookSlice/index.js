import { createSlice } from "@reduxjs/toolkit";
import { addBook } from "../../api/book/addBook";
import { getAllBooks } from "../../api/book/getAllBooks";
import { updateBook } from "../../api/book/updateBook";
import { deleteBook } from "../../api/book/deleteBook";

const initialState = {
    books: {},
    isLoading: true

}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addBook.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addBook.fulfilled, (state, action) => {
                state.isLoading = false
                state.books = action.payload
            })
            .addCase(addBook.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(getAllBooks.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllBooks.fulfilled, (state, action) => {
                state.isLoading = false
                state.books = action.payload
            })
            .addCase(getAllBooks.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(updateBook.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateBook.fulfilled, (state, action) => {
                state.isLoading = false
                state.books = action.payload
            })
            .addCase(updateBook.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(deleteBook.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteBook.fulfilled, (state, action) => {
                state.isLoading = false
                state.books = action.payload
            })
            .addCase(deleteBook.rejected, (state) => {
                state.isLoading = false
            })
    }
})


const bookReducer = bookSlice.reducer
export default bookReducer