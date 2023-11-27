import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import { medicinesReducer } from "./medicines.reducer";
import { departmentsReducer } from "./departments.reducer";
import { cartReducer } from "./cart.reducer";
import medicinesSlice from "../slice/medicines.slice";
import appointmentSlice from "../slice/appointment.slice";
import { signupReducer } from "./auth.reducer";


export const rootreducer = combineReducers({
    counter: counterReducer,
    medicines: medicinesSlice,
    departments: departmentsReducer,
    cart: cartReducer,
    appointment: appointmentSlice,
    signup: signupReducer
})