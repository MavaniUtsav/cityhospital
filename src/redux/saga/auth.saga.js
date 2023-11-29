import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { authError, loginResponse, signupRequest, signupResponse } from '../Action/auth.action'
import { LOGIN_REQUEST, SIGNUP_REQUEST, SIGNUP_RESPONSE } from '../ActionType'
import { loginApi, signupApi } from '../../common/api/auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    console.log(action.payload);
    try {
        const user = yield call(signupApi, action.payload)
        yield put(signupResponse(user.user))
    } catch (error) {
        yield put(authError(error.message))
    }
}

function* loginUser(action) {
    console.log(action.payload);

    try {
        const user = yield call(loginApi, action.payload)
        console.log(user);
        yield put(loginResponse(user.user))
    } catch (error) {
        yield put(authError(error.message))
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

export default function* userSaga() {
    yield all([
        watchSignup(),
        watchLogin()
    ])
}