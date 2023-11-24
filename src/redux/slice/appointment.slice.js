import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { ADD_APPOINT } from "../ActionType";

const initialState = {
    isLoading: false,
    appointment: [],
    error: null
}

export const addAppointment = createAsyncThunk(
    'appointment/post',
    async (data) => {
        // const docRef = await addDoc(collection(db, "users"), data);
        // console.log("Document written with ID: ", docRef.id);
        console.log(data);
    }
)


export const appointmentsSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(getMedicine.pending, onload)
        // builder.addCase(getMedicine.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.medicines = action.payload;
        //     state.error = null
        // })
        // builder.addCase(getMedicine.rejected, onErr)

        // builder.addCase(deleteMedicine.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.error = null
        //     state.medicines = state.medicines.filter((v) => v.id !== action.payload)
        // })

        builder.addCase(addAppointment.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = action.payload;
            state.error = null
            console.log(state, action.payload);
        })
    }
})


export default appointmentsSlice.reducer