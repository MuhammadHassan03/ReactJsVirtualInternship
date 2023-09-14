import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const Cart = createSlice({
    name : 'name',
    initialState,
    reducers: {
        addToCart(state, action){
            state.cart.push(action.payload);
        },
        removeFromCart(state, action){
            state.cart = state.cart.filter((product)=> product.id != action.payload.id);
        }
    }
}
)

export const {addToCart, removeFromCart} = Cart.actions;
export default Cart.reducer;