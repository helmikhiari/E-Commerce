import { configureStore } from "@reduxjs/toolkit";
import userSlice from './../reducers/userSlice';
import productsSlice from './../reducers/productSlice'

const store = configureStore({
    reducer: {
        user: userSlice,
        products:productsSlice
    }
})

export default store;