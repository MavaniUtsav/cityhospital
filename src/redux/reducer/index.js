import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import { medicinesReducer } from "./medicines.reducer";
import { departmentsReducer } from "./departments.reducer";
import { cartReducer } from "./cart.reducer";
import medicinesSlice from "../slice/medicines.slice";
import appointmentSlice from "../slice/appointment.slice";
import { authReducer, signupReducer } from "./auth.reducer";
import alertSlice from "../slice/alert.slice";


export const rootreducer = combineReducers({
    counter: counterReducer,
    medicines: medicinesSlice,
    departments: departmentsReducer,
    cart: cartReducer,
    appointment: appointmentSlice,
    auth: authReducer,
    alert: alertSlice
})