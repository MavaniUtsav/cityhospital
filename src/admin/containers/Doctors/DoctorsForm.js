import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';

function DoctorsForm({ onSubmitClick, updateData }) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (updateData) {
            handleClickOpen()
            setValues(updateData)
        }
    }, [updateData])

    const doctorSchema = yup.object().shape({
        name: yup.string().required().matches(/^[a-zA-Z ]+$/, 'Please enter Valid name'),
        description: yup.string().required().test(
            "length", "Description must be at least 10 characters long.",
            function (value) {
                if (value.split(' ').length >= 20) {
                    return true
                } else {
                    return false
                }
            }
        ),
        designation: yup.string().required(),
        url: yup.string().required().url()
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
            description: '',
            designation: '',
            url: ''
        },
        onSubmit: (values, action) => {
            // console.log(values);
            // if (update) {
            //     handleUpdateData(values)
            // } else {
            //     handleAdd(values)
            // }
            onSubmitClick(values)

            action.resetForm()
            handleClose()
            // action.handleReset()
        },
        validationSchema: doctorSchema
    })

    const { handleSubmit, handleBlur, handleChange, errors, touched, values, setValues } = formikObj;

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Doctors
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                    />
                    {errors.name && touched.name ? <span className='error'>{errors.name}</span> : null}
                    <TextField
                        margin="dense"
                        id="name"
                        name="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.description}
                    />
                    {errors.description && touched.description ? <span className='error'>{errors.description}</span> : null}
                    <TextField
                        margin="dense"
                        id="name"
                        name="designation"
                        label="Designation"
                        type="email"
                        fullWidth
                        variant="standard"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.designation}
                    />
                    {errors.designation && touched.designation ? <span className='error'>{errors.designation}</span> : null}
                    <TextField
                        margin="dense"
                        id="name"
                        name="url"
                        label="FB Profile url"
                        type="email"
                        fullWidth
                        variant="standard"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.url}
                    />
                    {errors.url && touched.url ? <span className='error'>{errors.url}</span> : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>{updateData ? 'Update' : 'Add'}</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default DoctorsForm;