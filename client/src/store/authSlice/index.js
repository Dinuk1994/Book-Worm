import { createSlice } from "@reduxjs/toolkit";
import { signin } from "../../api/auth/signin";
import { checkAuth } from "../../api/auth/checkAuth";


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
            state.isLoading = true,
            state.user = null
            state.isAuthenticate = false
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
        .addCase(checkAuth.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(checkAuth.fulfilled, (state,action)=>{
            state.isLoading = false
            state.user = action.payload.user  
            console.log(action.payload);                
            state.isAuthenticate = true
        })
        .addCase(checkAuth.rejected, (state)=>{
            state.isLoading = false
            state.user = null
            state.isAuthenticate = false
        })
    }
})

export const {setUser} = auth.actions
export default auth.reducer