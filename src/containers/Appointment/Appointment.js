import React, { useEffect, useState } from 'react';
import InputBox from '../../components/UI/InputBox/InputBox';
import * as yup from 'yup';
import { useFormik } from 'formik';
import BackBtn from '../../components/UI/BackBtn/BackBtn';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { addAppointment, deleteAppointment, editAppointment, getAppointment } from '../../redux/slice/appointment.slice';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Appointment(props) {
    const [value, setValue] = React.useState(0);
    const [updates, setUpdates] = useState(false);

    const appointment = useSelector(state => state.appointment)
    const dispatch = useDispatch()


    // const [selectedFile, setSelectedFile] = useState();
    // const [isFilePicked, setIsFilePicked] = useState(false);

    useEffect(() => {
        dispatch(getAppointment())
    }, [])

    const date = new Date()
    date.setDate(date.getDate() - 1);

    const handleChanges = (event, newValue) => {
        setValue(newValue);
    };

    const handleDelete = (data) => {
        dispatch(deleteAppointment(data))
    }

    const handleEdit = (data) => {
        setValue(0)
        setValues(data)
        setUpdates(true)
    }

    const appointmentSchema = yup.object().shape({
        name: yup.string().required('*Please fill this field').matches(/^[a-zA-Z ]{3,15}$/, '*Please enter valid name'),
        email: yup.string().email('*Please enter valid email').required('*Please fill this field'),
        // phone: yup.string().matches(/^[0-9]{10,10}$/, '*Phone number is not valid'),
        phone: yup.string().matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/, '*Phone number is not valid').required('*Please fill this field'),
        date: yup.date().min(date, '*Past date not allowed').required('*Please fill this field'),
        department: yup.string().required(),
        message: yup.string()
            .matches(/^\S+(?: \S+)*$/, 'Extra spaces are not allowed')
            .min(20, '*Please enter minimum 20 charachter')
            .max(100, '*Maximum 100 charachter are allowed')
            .required('*Please fill this field')
            .test("message", "Only 5 Word are allowed", function (val) {
                if (val.split(' ').length <= 10) {
                    return true
                } else {
                    return false
                }
            }),
        file: yup.mixed()
            .required()
        //     .test("FILE_SIZE", "Uploaded file is too big.", (value) => {
        //         // if (selectedFile <= 20000000) {
        //         //     return true;
        //         // } else {
        //         //     return false;
        //         // }
        //         console.log(value);
        //     })
        // .test("FILE_SIZE", "Uploaded file is too big.",
        //     (value) => value && value.size <= 2000)
        // .test("FILE_FORMAT", "Uploaded file has unsupported format.",
        //     (value) => console.log(value.type))
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
            file: ''
        },
        onSubmit: values => {
            // let arr = values.message.split(" ");

            // let arrOne = arr.map((v) => {
            //     return v[0].toUpperCase() + v.substring(1)
            // })
            // let arrTwo = arrOne.join(" ")
            // values.message = arrTwo
            // console.log(arrTwo);

            // console.log(values);
            // alert(JSON.stringify(values, null, 2));

            // try {
            //     const docRef = addDoc(collection(db, "appointment"), values);
            //     console.log("Document written with ID: ", docRef.id);
            //   } catch (e) {
            //     console.error("Error adding document: ", e);
            //   }
            if (updates) {
                dispatch(editAppointment(values))
            } else {
                dispatch(addAppointment(values))
            }

            handleReset()
        },
        validationSchema: appointmentSchema
    })

    const { handleSubmit, handleBlur, handleChange, handleReset, setFieldValue, errors, touched, values, setValues } = formikObj;

    const columns = [
        { field: 'name', headerName: 'Patient Name', width: 140 },
        { field: 'email', headerName: 'Email', width: 100 },
        { field: 'phone', headerName: 'Phone', width: 120 },
        { field: 'date', headerName: 'Date', width: 120 },
        { field: 'department', headerName: 'Department', width: 120 },
        { field: 'message', headerName: 'Message', width: 350 },
        { field: 'file', headerName: 'Message', width: 165 },
        {
            field: 'action', headerName: 'Action', width: 300, renderCell: (params) => (
                <strong>
                    <EditIcon id='editico' onClick={() => handleEdit(params.row)} />
                    <DeleteIcon id='deleteico' onClick={() => { handleDelete(params.row) }} />
                </strong>
            )
        },
    ];
    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <br></br>
                <BackBtn />
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChanges} aria-label="basic tabs example">
                        <Tab label="Make Appointment" {...a11yProps(0)} />
                        <Tab label="Appointment List" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <form onSubmit={handleSubmit} method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <InputBox
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.name}
                                />
                                {errors.name && touched.name ? <span className='error'>{errors.name}</span> : null}
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <InputBox
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    data-rule="email"
                                    data-msg="Please enter a valid email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                {errors.email && touched.email ? <span className='error'>{errors.email}</span> : null}
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <InputBox
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your Phone"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.phone}
                                />
                                {errors.phone && touched.phone ? <span className='error'>{errors.phone}</span> : null}
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <InputBox
                                    type="date"
                                    name="date"
                                    className="form-control datepicker"
                                    id="date"
                                    placeholder="Appointment Date"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.date}
                                />
                                {errors.date && touched.date ? <span className='error'>{errors.date}</span> : null}
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select
                                    name="department"
                                    id="department"
                                    className="form-select"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.department}
                                >
                                    <option value=''>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </select>
                                {errors.department && touched.department ? <span className='error'>{errors.department}</span> : null}
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <InputBox
                                    type="file"
                                    name="file"
                                    className="form-control"
                                    onBlur={handleBlur}
                                    onChange={(e) => setFieldValue("file", e.target.files[0])}
                                />
                                <img 
                                    style={{width: '75px', height: '75px', float: 'right'}}
                                    src={typeof values.file === 'string' ? values.file : URL.createObjectURL(values.file)}
                                />
                                {errors.file && touched.file ? <span className='error'>{errors.file}</span> : null}
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea
                                className="form-control"
                                name="message"
                                rows={5}
                                placeholder="Message (Optional)"
                                defaultValue={""}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.message}
                            />
                            {errors.message && touched.message ? <span className='error'>{errors.message}</span> : null}
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit" id='appointmentbtn'>{updates ? "Update an Appointment" : "Make an Appointment"}</button></div>
                    </form>
                </CustomTabPanel >
                <CustomTabPanel value={value} index={1}>
                    <div style={{ height: '60vh', width: '100%', marginTop: '12px', marginBottom: '12px' }}>
                        <DataGrid
                            rows={appointment.appointment}
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
                </CustomTabPanel>

            </div>
        </section >

    );
}

export default Appointment;