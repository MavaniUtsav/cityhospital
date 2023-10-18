import { ADD_MEDICINES, DELETE_MEDICINE, GET_MEDICINES, LOADING_MEDICINES, UPDATE_MEDICINES } from "../ActionType";

const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}


export const medicinesReducer = (state=initialState, action) => {

    switch (action.type) {
        case LOADING_MEDICINES:
            return {
                isLoading: true,
                medicines: [],
                error: null
            }

        case GET_MEDICINES:
            return {
                isLoading: false,
                medicines: action.payLoad,
                error: null
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