import { ADD_DEPARTMENTS, DELETE_DEPARTMENTS, GET_DEPARTMENTS, UPDATE_DEPARTMENTS } from "../ActionType";


const initialState = {
    isLoading: false,
    departments: [],
    error: null
}

export const departmentsReducer = (state=initialState, action) => {
    console.log(action);

    switch (action.type) {
        case GET_DEPARTMENTS:
            return {
                ...state,
                departments: action.payLoad
            }

        case DELETE_DEPARTMENTS:
            return {
                ...state,
                departments: state.departments.filter((v) => v.id !== action.payLoad)
            }

        case ADD_DEPARTMENTS:
            return {
                ...state,
                departments: action.payLoad
            }    
            
        case UPDATE_DEPARTMENTS:
            return {
                ...state,
                departments: state.departments.map((v) => {
                    if (v.id === action.payLoad.id){
                        return action.payLoad
                    } else {
                        return v
                    }
                })
            }
        default:
            return state;
    }
}