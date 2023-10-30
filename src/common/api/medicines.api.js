import { date } from "yup"
import { deleteRequest, getRequest, postRequest, putRequest } from "../request"


export const getMedicinesData = () => {
    return getRequest('medicines/')
}

export const addMedicinesData = (data) => {
    return postRequest('medicines/', data)
}

export const updateMedicinesData = (data) => {
    return putRequest('medicines/', data)
}

export const deleteMedicinesData = (id) => {
    return deleteRequest('medicines/' + id)
}