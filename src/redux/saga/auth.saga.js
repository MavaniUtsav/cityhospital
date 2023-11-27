import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { signupRequest } from '../Action/auth.action'
import { SIGNUP_REQUEST } from '../ActionType'
import { signupApi } from '../../common/api/auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    try {
        const user = yield call(signupApi, action.payload)
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* watchsaga() {
    yield takeEvery(SIGNUP_REQUEST, signupUser)
}

export default function* userSaga() {
    yield all([
        watchsaga()
    ])
}