import { DELETE_MEDICINE, GET_MEDICINES } from "../ActionType";

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

        default:
            return state;
    }

    return initialState
}