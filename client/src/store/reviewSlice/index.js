import { createSlice } from "@reduxjs/toolkit";
import { addReview } from "../../api/reviews/addReview";

const initialState = {
    bookId : null,
    reviews : [],
    isLoading : true
}

const reviewSlice = createSlice({
    name : "review",
    initialState,
    reducers : {},
    extraReducers : (builder) =>{
        builder 
        .addCase(addReview.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(addReview.fulfilled,(state,action)=>{
            state.isLoading = false
            state.bookId = action.payload.bookId
            state.reviews = action.payload.reviews
            console.log("action.payload",action.payload);
            
        })
        .addCase(addReview.rejected,(state)=>{
            state.isLoading = false
        })
    }

})

const reviewReducer = reviewSlice.reducer;
export default reviewReducer