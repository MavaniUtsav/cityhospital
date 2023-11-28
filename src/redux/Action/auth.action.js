import { LOGIN_REQUEST, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../ActionType"

export const signupRequest = (values) => (dispatch) => {
    console.log(values);
    dispatch({ type: SIGNUP_REQUEST, payload: values })
}

export const loginRequest = (values) => (dispatch) => {
    console.log(values);
    // dispatch({type: LOGIN_REQUEST, payload: values})
}

export const signupResponse = (values) => (dispatch) => {
    console.log(values);
    dispatch({type: SIGNUP_RESPONSE, payload: values})
}