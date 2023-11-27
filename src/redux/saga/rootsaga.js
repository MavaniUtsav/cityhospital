import { all } from "redux-saga/effects";
import userSaga from "./auth.saga";

export default function* rootSaga() {
    yield all([
        userSaga()
    ])
}