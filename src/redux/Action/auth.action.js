import { AUTH_ERROR, FORGOT_REQUEST, LOGIN_REQUEST, LOGIN_RESPONSE, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../ActionType"

export const signupRequest = (values) => (dispatch) => {
    console.log(values);
    dispatch({ type: SIGNUP_REQUEST, payload: values })
}

export const signupResponse = (values) => (dispatch) => {
    dispatch({type: SIGNUP_RESPONSE, payload: values})
}

export const authError = (values) => (dispatch) => {
    dispatch({type: AUTH_ERROR, payload: values})
}

export const loginRequest = (values) => (dispatch) => {
    dispatch({type: LOGIN_REQUEST, payload: values})
}

export const loginResponse = (valuse) => (dispatch) => {
    dispatch({type: LOGIN_RESPONSE, payload: valuse})
}

export const forgotRequest = (values) => (dispatch) => {
    dispatch({type: FORGOT_REQUEST, payload: values})
}