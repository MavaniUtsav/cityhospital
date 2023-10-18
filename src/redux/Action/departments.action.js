import { API_URL } from "../../Utilities/Api-url";
import { ADD_DEPARTMENTS, DELETE_DEPARTMENTS, GET_DEPARTMENTS, UPDATE_DEPARTMENTS } from "../ActionType";


export const getDepartments = () => (dispatch) => {
    try {
        fetch(API_URL + '/departments')
            .then((response) => response.json())
            .then((data) => dispatch({ type: GET_DEPARTMENTS, payLoad: data }))
    } catch (error) {
        console.log(error);
    }
}

export const deleteDepartment = (id) => (dispatch) => {
    try {
        try {
            fetch(API_URL + '/departments/' + id, {
                method: 'DELETE'
            })
                .then((data) => dispatch({ type: DELETE_DEPARTMENTS, payLoad: id }))
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
}

export const addDepartments = (data) => (dispatch) => {
    try {
        fetch(API_URL + '/departments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => dispatch({type: ADD_DEPARTMENTS, payLoad: data }))
            .then((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const updateDepartments = (data) => (dispatch) => {
    try {
        fetch(API_URL + '/departments/' + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => dispatch({type: UPDATE_DEPARTMENTS, payLoad: data }))
            .then((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}