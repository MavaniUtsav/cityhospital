import { SIGNUP_REQUEST } from "../ActionType"


export const signupRequest = (values) => (dispatch) => {
    console.log(values);
    dispatch({ type: SIGNUP_REQUEST, payload: values })
}