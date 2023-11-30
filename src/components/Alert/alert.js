import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { clearAlert } from '../../redux/slice/alert.slice';

function Alert(props) {
    const dispatch = useDispatch()
    const alert = useSelector(state => state.alert)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        if (alert.text !== '') {
            enqueueSnackbar(alert.text, { variant: alert.color })

            setTimeout(() => {
                dispatch(clearAlert())
            }, 2000)
        }
    }, [alert.text])


    return (
        <>
        </>
    );
}

export default Alert;