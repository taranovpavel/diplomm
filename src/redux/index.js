import {configureStore} from "@reduxjs/toolkit";
import HeaderReducer from './HeaderSlice';
export const store = configureStore({
    reducer: {
        HeaderReducer
    }
})