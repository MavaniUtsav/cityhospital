import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';

function MedicineForm({ onHandleSubmit, updateData }) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (updateData) {
            handleClickOpen()
            setValues(updateData)
        }
    }, [updateData])

    const date = new Date()
    date.setDate(date.getDate() - 1);

    const medicineSchema = yup.object().shape({
        name: yup.string().required(),
        price: yup.number().required().test('price', '*The number must be greater then 0!', (value) => value > 0),
        expiry: yup.date().required().min(date, '*Past date not allowed'),
        description: yup
            .string()
            .min(10)
            .max(1000)
            .required("Please Enter a Description")
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const formikObj = useFormik({
        initialValues: {
            name: '',
            price: '',
            expiry: '',
            description: ''
        },
        onSubmit: (values, action) => {
            // if (update) {
            //     handleUpdateData(values)
            // } else {
            //     handleAdd(values)
            // }
            onHandleSubmit(values)   //State Up Lifting
            action.resetForm()
            handleClose()
        },
        validationSchema: medicineSchema
    })

    const { handleSubmit, handleBlur, handleChange, errors, touched, values, setValues } = formikObj;

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicine
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Medicine</DialogTitle>
                <DialogContent>
                    <TextField
                        // autoFocus
                        margin="dense"
                        id="name"
                        label="Medicine Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        name='name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                    />
                    {errors.name && touched.name ? <span className='error'>{errors.name}</span> : null}
                    <TextField
                        // autoFocus
                        margin="dense"
                        id="name"
                        label="Price"
                        type="number"
                        fullWidth
                        variant="standard"
                        name='price'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.price}
                    />
                    {errors.price && touched.price ? <span className='error'>{errors.price}</span> : null}
                    <TextField
                        // autoFocus
                        margin="dense"
                        id="name"
                        label="Expiry"
                        type="date"
                        fullWidth
                        variant="standard"
                        name='expiry'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.expiry}
                    />
                    {errors.expiry && touched.expiry ? <span className='error'>{errors.expiry}</span> : null}

                    <TextField
                        // autoFocus
                        margin="dense"
                        id="name"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        name='description'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.description}
                    />
                    {errors.description && touched.description ? <span className='error'>{errors.description}</span> : null}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>{updateData ? 'Update' : 'Add'}</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default MedicineForm;