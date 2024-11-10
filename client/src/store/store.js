import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import bookReducer from "./bookSlice"
import favoriteReducer from "./favoriteSlice"
import reviewReducer from "./reviewSlice"

const store = configureStore({
    reducer: {
        auth : authReducer,
        book : bookReducer,
        favorite : favoriteReducer,
        review : reviewReducer
    }
})

export default store