import { API_URL, DELETE_URL } from "../../Utilities/Api-url"
import { addMedicinesData, deleteMedicinesData, getMedicinesData, updateMedicinesData } from "../../common/api/medicines.api";
import { ADD_MEDICINES, DELETE_MEDICINE, ERROR_MEDICINES, GET_MEDICINES, LOADING_MEDICINES, UPDATE_MEDICINES } from "../ActionType";

export const getMedicines = () => (dispatch) => {
    try {
        dispatch(loadingMedicines())
        return setTimeout(function () {
            getMedicinesData()
                .then((response) => dispatch({ type: GET_MEDICINES, payLoad: response.data }))
                .catch((error) => dispatch(errorMedicines(error)))
        }, 1000)
    } catch (error) {
        dispatch(errorMedicines(error))
    }
}

export const deleteMedicines = (id) => (dispatch) => {
    try {
        deleteMedicinesData(id)
            .then((response) => dispatch({ type: DELETE_MEDICINE, payLoad: response.data }))
            .catch((error) => console.log(error))
        // fetch(API_URL + '/medicines/' + id, {
        //     method: 'DELETE'
        // })
        //     .then((data) => dispatch({ type: DELETE_MEDICINE, payLoad: id }))
        //     .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const addMedicines = (data) => (dispatch) => {
    try {
        dispatch(loadingMedicines())
        return setTimeout(function () {
            addMedicinesData(data)
                .then((response) => dispatch({ type: ADD_MEDICINES, payLoad: response.data }))
                .then((error) => dispatch(errorMedicines(error)))
        }, 1000)
    } catch (error) {
        dispatch(errorMedicines(error))
    }
}

export const updateMedicines = (data) => (dispatch) => {
    try {
        updateMedicinesData(data)
            .then((response) => dispatch({ type: UPDATE_MEDICINES, payLoad: response.data }))
            .then((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const loadingMedicines = () => (dispatch) => {
    dispatch({ type: LOADING_MEDICINES })
}

export const errorMedicines = (error) => (dispatch) => {
    dispatch({ type: ERROR_MEDICINES, payLoad: error })
}