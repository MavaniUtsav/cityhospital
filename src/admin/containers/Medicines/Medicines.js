import React, { useEffect, useState } from 'react';
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
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function Medicines(props) {
    const [open, setOpen] = React.useState(false);
    const [mData, setMData] = useState([]);
    const [update, setUpdate] = useState(false);

    const date = new Date()
    date.setDate(date.getDate() - 1);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('medicines'))

        if (localData) {
            setMData(localData)
        }
    }, [])

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

    const handleAdd = (data) => {
        let localData = JSON.parse(localStorage.getItem('medicines'))
        let id = Math.floor(Math.random() * 1000)

        if (localData) {
            localData.push({ id, ...data })
            localStorage.setItem('medicines', JSON.stringify(localData))
            setMData(localData)
        } else {
            localStorage.setItem('medicines', JSON.stringify([{ id, ...data }]))
            setMData([{ id, ...data }])
        }
    }

    const handleUpdateData = (data) => {
        let localData = JSON.parse(localStorage.getItem('medicines'))
        let index = localData.findIndex((v) => v.id === data.id)

        localData[index] = data

        localStorage.setItem('medicines', JSON.stringify(localData))

        setMData(localData)

        setUpdate(false)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (id) => {
        let newList = mData.filter((v, index) => v.id !== id);
        setMData(newList)
        localStorage.setItem("medicines", JSON.stringify(newList))
    }

    const handleEdit = (data) => {
        setValues(data)

        setUpdate(true)
    }

    const formikObj = useFormik({
        initialValues: {
            name: '',
            price: '',
            expiry: '',
            description: ''
        },
        onSubmit: (values, action) => {
            if (update) {
                handleUpdateData(values)
            } else {
                handleAdd(values)
            }
            action.resetForm()
            handleClose()
            // action.handleReset()
        },
        validationSchema: medicineSchema
    })

    const { handleSubmit, handleBlur, handleChange, errors, touched, values, setValues } = formikObj;

    const columns = [
        { field: 'name', headerName: 'Medicine Name', width: 140 },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'expiry', headerName: 'Expiry', width: 120 },
        { field: 'description', headerName: 'Description', width: 300 },
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
                    <Button onClick={handleSubmit}>{update ? 'Update' : 'Add'}</Button>
                </DialogActions>
            </Dialog>
            <div style={{ height: '75vh', width: '100%', marginTop: '15px' }}>
                <DataGrid
                    rows={mData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 15, 20]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Medicines;

// console.log('Delete', id);
// let newList = mData.filter((Obj) => Obj.id !== id);
// setMData(newList);
// localStorage.setItem('medicines', JSON.stringify(newList))
// let localData = JSON.parse(localStorage.getItem('medicines'))
// let newList;

// mData.map((v, index) => {
//     if (id === v.id) {
//         newList = [...localData].splice(index, 1)
//     }
// })
// console.log(newList);
// setMData(newList)
// localStorage.setItem('medicines', JSON.stringify(newList))
// let setItem = mData.filter((v) => id !== v.id)

// setMData(setItem);
// localStorage.setItem("medicines", JSON.stringify(setItem));