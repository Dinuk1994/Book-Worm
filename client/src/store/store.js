import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import bookReducer from "./bookSlice"

const store = configureStore({
    reducer: {
        auth : authReducer,
        book : bookReducer
    }
})

export default store