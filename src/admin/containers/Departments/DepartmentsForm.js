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

function DepartmentsForm({ onHandleSubmit, updateData }) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (updateData) {
            handleClickOpen()
            setValues(updateData)
        }
    }, [updateData])

    const departmentSchema = yup.object().shape({
        name: yup.string().required(),
        short_desc: yup.string().required().min(25, "Minimum 25 charachter required"),
        long_desc: yup
            .string()
            .min(35)
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
            short_desc: '',
            long_desc: ''
        },
        onSubmit: (values, action) => {
            // if (update) {
            //     handleUpdateData(values)
            // } else {
            //     handleAdd(values)
            // }
            console.log(values);
            onHandleSubmit(values)   //State Up Lifting
            action.resetForm()
            handleClose()
        },
        validationSchema: departmentSchema
    })

    const { handleSubmit, handleBlur, handleChange, errors, touched, values, setValues } = formikObj;

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Department
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Departments</DialogTitle>
                <DialogContent>
                    <TextField
                        // autoFocus
                        margin="dense"
                        id="name"
                        label="Department Name"
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
                        label="Short Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        name='short_desc'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.short_desc}
                    />
                    {errors.short_desc && touched.short_desc ? <span className='error'>{errors.short_desc}</span> : null}
                    <TextField
                        // autoFocus
                        margin="dense"
                        id="name"
                        label="Long Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        name='long_desc'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.long_desc}
                    />
                    {errors.long_desc && touched.long_desc ? <span className='error'>{errors.long_desc}</span> : null}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>{updateData ? 'Update' : 'Add'}</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default DepartmentsForm;