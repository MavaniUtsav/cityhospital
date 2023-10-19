import { ADD_TO_CART } from "../ActionType"

export const addToCart = (id) => (dispatch) => {
    dispatch({ type: ADD_TO_CART, payLoad: {id, qty: 1} })
}