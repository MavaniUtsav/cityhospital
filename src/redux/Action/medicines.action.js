import { API_URL, DELETE_URL } from "../../Utilities/Api-url"
import { ADD_MEDICINES, DELETE_MEDICINE, ERROR_MEDICINES, GET_MEDICINES, LOADING_MEDICINES, UPDATE_MEDICINES } from "../ActionType";

export const getMedicines = () => (dispatch) => {
    try {
        dispatch(loadingMedicines())
        return setTimeout(function () {
            fetch(API_URL + '/medicines')
                .then((response) => {
                    console.log(response);
                    if (!response.ok) {
                        throw 'Something went Wrong!!  ' + response.status;
                    } else{
                        return response.json()
                    }
                })
                .then((data) => dispatch({ type: GET_MEDICINES, payLoad: data }))
                .catch((error) => dispatch(errorMedicines(error)))
        }, 2000)
    } catch (error) {
        dispatch(errorMedicines(error))
    }
}

export const deleteMedicines = (id) => (dispatch) => {
    try {
        fetch(API_URL + '/medicines/' + id, {
            method: 'DELETE'
        })
            .then((data) => dispatch({ type: DELETE_MEDICINE, payLoad: id }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const addMedicines = (data) => (dispatch) => {
    console.log(data);
    try {
        fetch(API_URL + '/medicines', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ADD_MEDICINES, payLoad: data }))
            .then((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const updateMedicines = (data) => (dispatch) => {
    try {
        fetch(API_URL + '/medicines/' + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: UPDATE_MEDICINES, payLoad: data }))
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