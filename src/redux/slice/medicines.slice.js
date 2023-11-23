import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addMedicinesData, deleteMedicinesData, getMedicinesData } from "../../common/api/medicines.api"
import { reject } from "lodash"

const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}

export const getMedicine = createAsyncThunk(
    'medicine/get',
    async () => {
        await new Promise((resolve, reject) => setTimeout(resolve, 1000))
        const response = await getMedicinesData()
        return response.data
    }
)

export const deleteMedicine = createAsyncThunk(
    'medicine/delete',
    async (id) => {
        const response = await deleteMedicinesData()

        return id
    }
)

// export const addMedicines = createAsyncThunk(
//     'medicine/add',
//     async (data) => {
//         const response = await addMedicinesData()

//         return response.data
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