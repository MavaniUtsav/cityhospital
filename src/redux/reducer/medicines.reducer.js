import { ADD_MEDICINES, DELETE_MEDICINE, GET_MEDICINES, UPDATE_MEDICINES } from "../ActionType";

const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}


export const medicinesReducer = (state=initialState, action) => {
    console.log(action);

    switch (action.type) {
        case GET_MEDICINES:
            return {
                ...state,
                medicines: action.payLoad
            }

        case DELETE_MEDICINE:
            return {
                ...state,
                medicines: state.medicines.filter((v) => v.id !== action.payLoad)
            }

        case ADD_MEDICINES:
            return {
                ...state,
                medicines: action.payLoad
            }        

        case UPDATE_MEDICINES:
            return {
                ...state,
                medicines: state.medicines.map((v) => {
                    if (v.id === action.payLoad.id) {
                        return action.payLoad
                    } else {
                        return v
                    }
                })
            }
        default:
            return state;
    }

    return initialState
}