import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import { medicinesReducer } from "./medicines.reducer";
import { departmentsReducer } from "./departments.reducer";


export const rootreducer = combineReducers({
    counter: counterReducer,
    medicines: medicinesReducer,
    departments: departmentsReducer
})