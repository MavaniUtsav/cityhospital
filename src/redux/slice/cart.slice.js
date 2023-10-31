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
            }

            state.isLoading = false
            state.error = null
        },
        incrementQty: (state, action) => {
            let index = state.cart.findIndex((v) => v.id === action.payload)
            console.log(action);
            state.cart[index].qty++;

            state.isLoading = false
            state.error = null
        },
        decrementQty: (state, action) => {
            let index1 = state.cart.findIndex((v) => v.id === action.payload)

            if (state.cart[index1].qty > 1) {
                state.cart[index1].qty--;
            }

            state.isLoading = false
            state.error = null
        },
        removeItem: (state, action) => {
            let index2 = state.cart.findIndex((v) => v.id === action.payload)
            state.cart.splice(index2,1)

            state.isLoading = false
            state.error = null
        }
    }
})

export const { addToCart, incrementQty, decrementQty, removeItem } = cartSlice.actions;

export default cartSlice.reducer;