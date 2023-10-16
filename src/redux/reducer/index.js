import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import { medicinesReducer } from "./medicines.reducer";


export const rootreducer = combineReducers({
    counter: counterReducer,
    medicines: medicinesReducer
})