import {configureStore} from '@reduxjs/toolkit'
import authSlice from "../component/reducers/authReducer";


export const store = configureStore({
    reducer: {
        authSlice:authSlice
    },
})