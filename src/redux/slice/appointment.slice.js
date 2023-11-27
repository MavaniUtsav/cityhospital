import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { ADD_APPOINT } from "../ActionType";
import { async } from "q";

const initialState = {
    isLoading: false,
    appointment: [],
    error: null
}

export const getAppointment = createAsyncThunk(
    'appointment/get',
    async () => {
        // await new Promise((resolve, reject) => setTimeout(resolve, 1000))
        // const response = await getMedicinesData()
        let data = []

        const querySnapshot = await getDocs(collection(db, "appointment"));
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id })
        });

        return data;
    }
)

export const addAppointment = createAsyncThunk(
    'appointment/post',
    async (data) => {
        const docRef = await addDoc(collection(db, "appointment"), data);

        console.log("Document written with ID: ", docRef.id);
    }
)

export const deleteAppointment = createAsyncThunk(
    'appointment/delete',
    async (id) => {
        await deleteDoc(doc(db, "appointment", id));

        return id
    }
)

export const editAppointment = createAsyncThunk(
    'appointment/put',
    async (data) => {
        const washingtonRef = doc(db, "appointment", data.id);

        delete data.id

        await updateDoc(washingtonRef, data);
    }
)


export const appointmentsSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(getMedicine.pending, onload)
        builder.addCase(getAppointment.fulfilled, (state, action) => {
            state.isLoading = false;
            state.appointment = action.payload;
            state.error = null
        })
        // builder.addCase(getMedicine.rejected, onErr)

        builder.addCase(deleteAppointment.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.appointment = state.appointment.filter((v) => v.id !== action.payload)
        })

        builder.addCase(editAppointment.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.appointment = action.payload
        })

        builder.addCase(addAppointment.fulfilled, (state, action) => {
            state.isLoading = false
            state.appointment = action.payload;
            state.error = null
        })
    }
})


export default appointmentsSlice.reducer