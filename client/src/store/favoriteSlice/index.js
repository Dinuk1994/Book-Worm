import { createSlice } from "@reduxjs/toolkit";
import { addFavorite } from "../../api/favorite/addFavorite";
import { getFavorite } from "../../api/favorite/getFavorite";
import { removeFavorite } from "../../api/favorite/removeFavorite";

const initialState = {
    favorite : [],
    isLoading : true
}


const favoriteSlice = createSlice({
    name : "favorite",
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(addFavorite.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(addFavorite.fulfilled,(state,action)=>{
            state.isLoading = false
            state.favorite = action.payload
        })
        .addCase(addFavorite.rejected,(state)=>{
            state.isLoading = false
        })
        .addCase(getFavorite.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getFavorite.fulfilled,(state,action)=>{
            state.isLoading = false
            state.favorite = action.payload            
        })
        .addCase(getFavorite.rejected,(state)=>{
            state.isLoading = false
        })
        .addCase(removeFavorite.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(removeFavorite.fulfilled,(state,action)=>{
            state.isLoading = false
            state.favorite = action.payload
        })
        .addCase(removeFavorite.rejected,(state)=>{
            state.isLoading = false
        })

    }
})

const favoriteReducer = favoriteSlice.reducer
export default favoriteReducer
