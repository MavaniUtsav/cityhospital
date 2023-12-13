import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
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
        const number = Math.floor(Math.random() * 10000);

        let aptdata = { ...data };
        //*This is for File Upload
        const storageRef = ref(storage, "appointment/" + number + "_" + data.file.name);

        uploadBytes(storageRef, data.file)
            .then(async (snapshot) => {
                await getDownloadURL(ref(storage, snapshot.ref)).then(async url => {
                    console.log(url);

                    const aptdoc = await addDoc(collection(db, "appointment"), {
                        ...data,
                        dataname: number + "_" + data.file.name,
                        file: url
                    });

                    aptdata = {
                        id: aptdoc.id,
                        ...data,
                        dataname: number + "_" + data.file.name,
                        file: url
                    };
                });
            });
        return aptdata;
    })


export const deleteAppointment = createAsyncThunk(
    'appointment/delete',
    async (data) => {
        const desertRef = ref(storage, 'appointment/' + data.dataname);

        deleteObject(desertRef).then(async () => {
            // File deleted successfully
            await deleteDoc(doc(db, "appointment/", data.id));
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });

        return data.id;
    }
)

export const editAppointment = createAsyncThunk(
    'appointment/put',
    async (data) => {
        const number = Math.floor(Math.random() * 10000);

        let aptdata = { ...data };
        //*This is for File Upload
        const storageRef = ref(storage, "appointment/" + number + "_" + data.file.name);

        if (typeof data.file === 'string') {
            const aptRef = doc(db, "appointment", data.id);

            await updateDoc(aptRef, data);
        } else {
            const desertRef = ref(storage, 'appointment/' + data.dataname);

            deleteObject(desertRef).then(async () => {
                // File deleted successfully
                await deleteDoc(doc(db, "appointment/", data.id));
            }).catch((error) => {
                // Uh-oh, an error occurred!
            });

            uploadBytes(storageRef, data.file).then(async (snapshot) => {
                await getDownloadURL(ref(storage, snapshot.ref))
                    .then(async (url) => {
                        const aptdoc = await addDoc(collection(db, "appointment"), {
                            ...data,
                            dataname: number + "_" + data.file.name,
                            file: url
                        });

                        aptdata = {
                            id: aptdoc.id,
                            ...data,
                            dataname: number + "_" + data.file.name,
                            file: url
                        };

                        console.log(aptdata);
                    });
            });
        }
        return aptdata;
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
            console.log(action.payload);
            console.log(state.appointment);
            state.isLoading = false
            if (Array.isArray(state.appointment)) {
                state.appointment = state.appointment.concat(action.payload);
            } else {
                state.appointment = [action.payload]; // If not an array, create a new array with the payload
            }
            state.error = null
        })
    }
})


export default appointmentsSlice.reducer