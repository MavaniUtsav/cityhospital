import { ADD_TO_CART, DEC_QTY, INC_QTY, REMOVE_ITEM } from "../ActionType";

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

export const cartReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_TO_CART:
            let check = state.cart.some((v) => v.id === action.payLoad.id)

            if (check) {
                let index = state.cart.findIndex((v) => v.id === action.payLoad.id)
                state.cart[index].qty++;
            } else {
                state.cart.push(action.payLoad)
            }

            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }

        case INC_QTY:
            let index = state.cart.findIndex((v) => v.id === action.payLoad)
            state.cart[index].qty++;

            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }

        case DEC_QTY:
            let index1 = state.cart.findIndex((v) => v.id === action.payLoad)

            if (state.cart[index1].qty > 1) {
                state.cart[index1].qty--;
            }

            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }

        case REMOVE_ITEM:
            let index2 = state.cart.findIndex((v) => v.id === action.payLoad)
            state.cart.splice(index2,1)

            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }

        default:
            return state;
    }
}