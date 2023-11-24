import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addMedicinesData, deleteMedicinesData, getMedicinesData } from "../../common/api/medicines.api";
import { collection, getDocs, addDoc,doc, deleteDoc } from "firebase/firestore";
import { reject } from "lodash"
import { db } from "../../firebase";

const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}

export const getMedicine = createAsyncThunk(
    'medicine/get',
    async () => {
        await new Promise((resolve, reject) => setTimeout(resolve, 1000))
        // const response = await getMedicinesData()
        let data = []

        const querySnapshot = await getDocs(collection(db, "medicines"));
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id })
        });

        return data;
    }
)

export const deleteMedicine = createAsyncThunk(
    'medicine/delete',
    async (id) => {
        // const response = await deleteMedicinesData()
        await deleteDoc(doc(db, "medicines", id));

        return id
    }
)

// export const addMedicines = createAsyncThunk(
//     'medicine/add',
//     async (data) => {
//         try {
//             const docRef = await addDoc(collection(db, "medicines"), data);

//             // dispatch({ type: ADD_MEDICINES, payLoad: { ...data, id: docRef.id } })

//             console.log("Document written with ID: ", docRef.id);
//         } catch (e) {
//             console.error("Error adding document: ", e);
//         }

//         return { ...data, id: docRef.id };
//     }
// )

const onload = (state, action) => {
    state.isLoading = true
    state.error = null
}

const onErr = (state, action) => {
    state.isLoading = false
    state.error = action.error.message
}

export const medicinesSlice = createSlice({
    name: "medicine",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMedicine.pending, onload)
        builder.addCase(getMedicine.fulfilled, (state, action) => {
            state.isLoading = false;
            state.medicines = action.payload;
            state.error = null
        })
        builder.addCase(getMedicine.rejected, onErr)

        builder.addCase(deleteMedicine.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.medicines = state.medicines.filter((v) => v.id !== action.payload)
        })

        // builder.addCase(addMedicines.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.error = action.payload;
        //     state.error = null
        // })
    }
})


export default medicinesSlice.reducer