import { applyMiddleware, createStore } from "redux"
import { rootreducer } from "./reducer"
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk"
import rootSaga from "./saga/rootsaga"


export const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware()

    let middlewares = [thunk, sagaMiddleware]

    let store = createStore(rootreducer, applyMiddleware(...middlewares))

    sagaMiddleware.run(rootSaga)

    return store
}