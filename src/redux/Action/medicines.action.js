import { API_URL, DELETE_URL } from "../../Utilities/Api-url"
import { DELETE_MEDICINE, GET_MEDICINES } from "../ActionType";

export const getMedicines = () => (dispatch) => {
    try {
        fetch(API_URL + '/medicines')
            .then((response) => response.json())
            .then((data) => dispatch({ type: GET_MEDICINES, payLoad: data }))
    } catch (error) {
        console.log(error);
    }
}

export const deleteMedicines = (id) => (dispatch) => {
    try {
        fetch(API_URL + '/medicines/' + id, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: DELETE_MEDICINE, payLoad: id }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const firstAddMedicines = (dataN) => (dispatch) => {
    try {
        fetch(API_URL + '/medicines', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        })
            .then((response) => response.json())
            .then((data) => console.log(dataN))
            .then((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}