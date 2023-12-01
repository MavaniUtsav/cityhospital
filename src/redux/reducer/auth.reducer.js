import { AUTH_ERROR, LOGIN_REQUEST, LOGIN_RESPONSE, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../ActionType";

const initialState = {
    isLoading: false,
    errorMessage: null,
    user: []
}

export const authReducer = (state = initialState, action) => {
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