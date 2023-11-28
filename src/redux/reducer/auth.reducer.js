import { LOGIN_REQUEST, SIGNUP_REQUEST } from "../ActionType";

const initialState = {
    isLoading: false,
    errorMessage: null,
    user: []
}

export const signupReducer = (state=initialState, action) => {

    switch (action.type) {
        case SIGNUP_REQUEST:
            return state
    
        default:
            return state
    }
}