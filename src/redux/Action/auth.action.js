import { SIGNUP_REQUEST } from "../ActionType"


export const signupRequest = (values) => (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST, payLoad: values })
}