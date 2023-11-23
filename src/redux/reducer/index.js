import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import { medicinesReducer } from "./medicines.reducer";
import { departmentsReducer } from "./departments.reducer";
import { cartReducer } from "./cart.reducer";
import medicinesSlice from "../slice/medicines.slice";


export const rootreducer = combineReducers({
    counter: counterReducer,
    medicines: medicinesSlice,
    departments: departmentsReducer,
    cart: cartReducer
})