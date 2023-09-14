import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    productId : [],
    categories: [],
    selectedProduct : [],
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
            const {data} = await axios.get('https://fakestoreapi.com/products');
            return data;
        } catch (error) {
            return error;
        }
    }
);



const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct(state, action){
            state.selectedProduct = action.payload;
        },
        filterProducts(state, action){
            state.products = state.products.filter((product)=>{
                return product.category === action.payload
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = true;
                state.error = action.payload;
            })

    }
});

export const {setSelectedProduct, filterProducts} = products.actions;
export default products.reducer;
