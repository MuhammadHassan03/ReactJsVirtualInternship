import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './Slices/Authentication'
import productsReducer from './Slices/ProductsSlice';
import CartSlice from './Slices/CartSlice';

export const store = configureStore({
    reducer : {
        authentication: authenticationReducer,
        products : productsReducer,
        cart : CartSlice,
    }
});