import React from 'react';
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


function Medicines(props) {
    const [open, setOpen] = React.useState(false);
    const date = new Date()
    date.setDate(date.getDate() - 1);

    const medicineSchema = yup.object().shape({
        name: yup.string().required(),
        price: yup.number().required().test('price', '*The number must be greater then 0!', (value) => value > 0),
        expiry: yup.date().required().min(date, '*Past date not allowed'),
        description: yup.string().min(10, 'Minimum 10 charachter required').required()
        // .test('description', 'Minimum 100 charachter required', function (val) {
        //     // if (val.split(' ').length <= 5) {
        //     //     return true
        //     // } else {
        //     //     return false
        //     // }
        // })
    })

    const handleAdd = (data) => {
        let localData = JSON.parse(localStorage.getItem('medicines'))
        let id = Math.floor(Math.random() * 1000)

        if (localData) {
            localData.push({ id, ...data })
            localStorage.setItem('medicines', JSON.stringify(localData))
        } else {
            console.log('hello');
            localStorage.setItem('medicines', JSON.stringify([id,...data]))
        }

    }

    const formikObj = useFormik({
        initialValues: {
            name: '',
            price: '',
            expiry: '',
            description: ''
        },
        onSubmit: values => {
            handleAdd(values)
            handleReset()
            // action.handleReset()
        },
        validationSchema: medicineSchema
    })

    const { handleSubmit, handleBlur, handleChange, handleReset, errors, touched, values } = formikObj;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 95,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <div className='container'>
            {/* <h1>Medicines</h1> */}
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicine
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Medicine</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
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
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
            <div style={{ height: 400, width: '100%',marginTop: '15px' }}>
                <DataGrid
                    rows={rows}
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

export default Medicines;