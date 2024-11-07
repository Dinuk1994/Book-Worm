import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import bookReducer from "./bookSlice"
import favoriteReducer from "./favoriteSlice"

const store = configureStore({
    reducer: {
        auth : authReducer,
        book : bookReducer,
        favorite : favoriteReducer
    }
})

export default store