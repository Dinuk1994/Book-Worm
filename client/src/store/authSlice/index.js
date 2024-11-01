/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { signin } from "../../api/auth/signin";
import { checkAuth } from "../../api/auth/checkAuth";
import { login } from "../../api/auth/login";
import { logout } from "../../api/auth/logout";


const initialState = {
    isAuthenticate : false,
    user : null,
    isLoading : true
}

const auth = createSlice({
    name : "auth",
    initialState,
    reducer : {
        setUser : (state,action)=>{
            state.user = action.payload
            state.isAuthenticate = true
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(signin.pending, (state)=>{
            state.isLoading = true

        })
        .addCase(signin.fulfilled, (state,action)=>{
            state.isLoading = false
            state.user = action.payload
            state.isAuthenticate = true
        })
        .addCase(signin.rejected, (state)=>{
            state.isLoading = false
            state.user = null
            state.isAuthenticate = false
        })
        
        .addCase(login.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading = false
            state.user = action.payload.user
            state.isAuthenticate = true
        })
        .addCase(login.rejected,(state)=>{
            state.isLoading = false
            state.user = null
        })
        .addCase(checkAuth.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user; 
            state.isAuthenticate = true;
        })
        .addCase(checkAuth.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isAuthenticate = false;
        })
        .addCase(logout.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = null;
            state.isAuthenticate = false;
            state.isLoading = false;

        })
        .addCase(logout.rejected, (state) => {
            state.isLoading = false;

        })
    }
})

export const {setUser} = auth.actions
export default auth.reducer