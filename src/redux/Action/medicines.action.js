import { API_URL } from "../../Utilities/Api-url"
import { DELETE_MEDICINE, GET_MEDICINES } from "../ActionType";

export const getMedicines = () => (dispatch) => {
    try {
        fetch(API_URL + 'medicines')
            .then((response) => response.json())
            .then((data) => dispatch({ type: GET_MEDICINES, payLoad: data }))
    } catch (error) {
        console.log(error);
    }
}

export const deleteMedicines = (id) => (dispatch) => {
    try {
        fetch(API_URL + 'meidcines/' + id, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: DELETE_MEDICINE, payLoad: id }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}