import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let check = state.cart.some((v) => v.id === action.payload.id)

            if (check) {
                let index = state.cart.findIndex((v) => v.id === action.payload.id)
                state.cart[index].qty++;
            } else {
                state.cart.push(action.payload)
                console.log(state.cart);
            }
        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;