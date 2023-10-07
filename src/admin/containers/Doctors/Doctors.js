import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import * as yup from 'yup';
import { useFormik } from 'formik';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function Doctors(props) {
    const [open, setOpen] = React.useState(false);
    const [dData, setDData] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('doctors'))

        if (localData) {
            setDData(localData)
        }
    }, [])

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

    const handleAdd = (data) => {
        let localData = JSON.parse(localStorage.getItem('doctors'))
        let id = Math.floor(Math.random() * 1000)

        if (localData) {
            localData.push({ id, ...data })
            localStorage.setItem('doctors', JSON.stringify(localData))
            setDData(localData)
        } else {
            localStorage.setItem('doctors', JSON.stringify([{ id, ...data }]))
            setDData([{ id, ...data }])
        }
    }

    const handleUpdateData = (data) => {
        let localData = JSON.parse(localStorage.getItem('doctors'))
        let index = localData.findIndex((v) => v.id === data.id)

        localData[index] = data

        localStorage.setItem('doctors', JSON.stringify(localData))

        setDData(localData)

        setUpdate(false)
    }

    const handleEdit = (data) => {
        setValues(data)

        setUpdate(true)
    }

    const handleDelete = (id) => {
        let newList = dData.filter((v) => v.id !== id)
        setDData(newList)
        localStorage.setItem('doctors', JSON.stringify(newList))
    }

    const formikObj = useFormik({
        initialValues: {
            name: '',
            description: '',
            designation: '',
            url: ''
        },
        onSubmit: (values, action) => {
            // console.log(values);
            if (update) {
                handleUpdateData(values)
            } else {
                handleAdd(values)
            }

            action.resetForm()
            handleClose()
            // action.handleReset()
        },
        validationSchema: doctorSchema
    })

    const { handleSubmit, handleBlur, handleChange, errors, touched, values, setValues } = formikObj;

    const columns = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'designation', headerName: 'Designation', width: 180 },
        { field: 'url', headerName: 'FB Profile_url', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 300, renderCell: (params) => (
                <strong>
                    <EditIcon id='editico' onClick={() => {
                        handleClickOpen()
                        handleEdit(params.row)
                    }} />
                    <DeleteIcon id='deleteico' onClick={() => { handleDelete(params.row.id) }} />
                </strong>
            )
        },
    ];

    return (
        <div className='container'>
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
                    <Button onClick={handleSubmit}>{update ? 'Update' : 'Add'}</Button>
                </DialogActions>
            </Dialog>
            <div style={{ height: 400, width: '100%', marginTop: '15px' }}>
                <DataGrid
                    rows={dData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Doctors;