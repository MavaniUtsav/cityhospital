import { AUTH_ERROR, LOGIN_REQUEST, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../ActionType";

const initialState = {
    isLoading: false,
    errorMessage: null,
    user: []
}

export const signupReducer = (state = initialState, action) => {
    console.log(action.payload);

    switch (action.type) {
        case SIGNUP_REQUEST:
            return state

        case SIGNUP_RESPONSE:
            return {
                isLoading: false,
                errorMessage: null,
                user: action.payload
            }
        
        case AUTH_ERROR:
            return {
                isLoading: false,
                errorMessage: action.payload,
                user: []
            }

        case LOGIN_REQUEST:
            return state

        default:
            return state
    }
}