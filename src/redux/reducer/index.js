import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import { medicinesReducer } from "./medicines.reducer";
import { departmentsReducer } from "./departments.reducer";
import { cartReducer } from "./cart.reducer";
import counterSlice from "../slice/counter.slice";
import cartSlice from "../slice/cart.slice";


export const rootreducer = combineReducers({
    counter: counterSlice,
    medicines: medicinesReducer,
    departments: departmentsReducer,
    cart: cartSlice
})