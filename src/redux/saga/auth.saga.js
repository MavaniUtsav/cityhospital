import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { authError, loginResponse, signupRequest, signupResponse } from '../Action/auth.action'
import { FORGOT_REQUEST, LOGIN_REQUEST, SIGNUP_REQUEST, SIGNUP_RESPONSE } from '../ActionType'
import { forgotApi, loginApi, signupApi } from '../../common/api/auth.api'
import { setAlert } from '../slice/alert.slice';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    try {
        const user = yield call(signupApi, action.payload)
        console.log(user.user);
        yield put(signupResponse(user.user))
        yield put(setAlert({text: user.message, color: 'success'}))
    } catch (error) {
        yield put(authError(error.message))
        yield put(setAlert({text: error.message, color: 'error'}))
    }
}

function* loginUser(action) {
    try {
        const user = yield call(loginApi, action.payload)
        yield put(loginResponse(user.user))
        yield put(setAlert({text: user.message, color: 'success'}))
    } catch (error) {
        yield put(authError(error.message))
        yield put(setAlert({text: error.message, color: 'error'}))
    }
}

function* forgotPassword(action) {
    try {
        const user = yield call(forgotApi, action.payload)
        yield put(setAlert({text: user.message, color: 'success'}))
    } catch (error) {
        yield put(authError(error.message))
        yield put(setAlert({text: error.message, color: 'error'}))
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* watchSignup() {
    yield takeEvery(SIGNUP_REQUEST, signupUser)
}

function* watchLogin() {
    yield takeEvery(LOGIN_REQUEST, loginUser)
}

function* watchForgot() {
    yield takeEvery(FORGOT_REQUEST, forgotPassword)
}

export default function* userSaga() {
    yield all([
        watchSignup(),
        watchLogin(),
        watchForgot()
    ])
}