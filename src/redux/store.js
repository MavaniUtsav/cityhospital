import { applyMiddleware, createStore } from "redux"
import { rootreducer } from "./reducer"
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk"
import rootSaga from "./saga/rootsaga"
import persistReducer from "redux-persist/es/persistReducer"
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/es/persistStore"

const persisstConfig = {
    key : 'root',
    storage: storage,
    whitelist: ['medicines','cart']
}

const persistedReducer = persistReducer(persisstConfig,rootreducer)
const sagaMiddleware = createSagaMiddleware()
let middlewares = [thunk, sagaMiddleware]


export const configureStore = () => {

    let store = createStore(persistedReducer, applyMiddleware(...middlewares))
    let persistor=persistStore(store)

    sagaMiddleware.run(rootSaga)

    return {store,persistor}
}