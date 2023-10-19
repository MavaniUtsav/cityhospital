import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import { medicinesReducer } from "./medicines.reducer";
import { departmentsReducer } from "./departments.reducer";
import { cartReducer } from "./cart.reducer";


export const rootreducer = combineReducers({
    counter: counterReducer,
    medicines: medicinesReducer,
    departments: departmentsReducer,
    cart: cartReducer
})