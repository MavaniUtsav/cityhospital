import { AUTH_ERROR, LOGIN_REQUEST, LOGIN_RESPONSE, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../ActionType";

const initialState = {
    isLoading: false,
    errorMessage: null,
    user: []
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
        case SIGNUP_RESPONSE:
            return {
                isLoading: false,
                errorMessage: null,
                user: null
            }
        
        case AUTH_ERROR:
            return {
                isLoading: false,
                errorMessage: action.payload,
                user: null
            }

        case LOGIN_RESPONSE:
            return {
                isLoading: false,
                errorMessage: null,
                user: action.payload
            }

        default:
            return state
    }
}