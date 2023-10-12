import React, { useState } from 'react';
import InputBox from '../../components/UI/InputBox/InputBox';
import { Formik, Form, Field, useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function StepForm(props) {
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        file: ''
    })

    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = (newData) => {
        console.log('next', newData);
        setData(prev => ({ ...prev, ...newData }))
        setCurrentStep(prev => prev + 1)
    }

    const handlePrevious = (newData) => {
        setData(prev => ({ ...prev, ...newData }))
        setCurrentStep(prev => prev - 1)
    }

    const steps = [
        <StepOne next={handleNext} data={data} />,
        <StepTwo next={handleNext} prev={handlePrevious} data={data} />,
        <StepThree next={handleNext} prev={handlePrevious} data={data} />
    ]

    const stepper = [
        'Full Name',
        'Email & Password',
        'Upload File',
    ];


    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={currentStep} alternativeLabel>
                    {stepper.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <div className='container'>
                {steps[currentStep]}
            </div>
        </>
    );
}

const formOneValidationSchema = yup.object().shape({
    first_name: yup.string().matches(/^[a-zA-Z ]+$/, '*Enter valid name').required(),
    last_name: yup.string().matches(/^[a-zA-Z ]+$/, '*Enter valid name').required()
})

const StepOne = ({ data, next }) => {

    return (
        <Formik
            initialValues={data}
            onSubmit={(values) => next(values)}
            validationSchema={formOneValidationSchema}
        >
            {({ errors, touched }) => (
                <Form role="form" className="php-email-form" >
                    <div className="row formstyle">
                        <div className="col-md-4 form-group">
                            <Field
                                type="text"
                                name="first_name"
                                className="form-control"
                                id="name"
                                placeholder="First Name"
                            />
                            {errors.first_name && touched.first_name ? <span className='error'>{errors.first_name}</span> : null}
                        </div>
                        <div className="col-md-4 form-group">
                            <Field
                                type="text"
                                name="last_name"
                                className="form-control"
                                id="name"
                                placeholder="Last Name"
                            />
                            {errors.last_name && touched.last_name ? <span className='error'>{errors.last_name}</span> : null}
                        </div>
                    </div>
                    <div className="text-center btn"><button type="submit" id='appointmentbtn'>Next</button></div>
                </Form >
            )}
        </Formik>
    )
}

const formTwoValidationSchema = yup.object().shape({
    email: yup.string().email('Enter valid email').required(),
    password: yup.string().required()
})

const StepTwo = ({ data, next, prev }) => {
    return (
        <Formik
            initialValues={data}
            onSubmit={(values) => next(values)}
            validationSchema={formTwoValidationSchema}
        >
            {({ values, errors, touched }) => (
                <Form role="form" className="php-email-form " >
                    <div className="row formstyle">
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <Field
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                            // onBlur={handleBlur}
                            // onChange={handleChange}
                            // value={values.email}
                            />
                            {/* {errors.email && touched.email ? <span className='error'>{errors.email}</span> : null} */}
                        </div>
                        <div className="col-md-4 form-group">
                            <Field
                                type="password"
                                name="password"
                                className="form-control"
                                id="name"
                                placeholder="Password"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                            // onBlur={handleBlur}
                            // onChange={handleChange}
                            // value={values.password}
                            />
                            {/* {errors.password && touched.password ? <span className='error'>{errors.password}</span> : null} */}
                        </div>
                    </div>
                    <div className='btn'>
                        <div className="text-center"><button type="button" id='appointmentbtn' onClick={() => prev(values)}>Previous</button></div>
                        <div className="text-center"><button type="submit" id='appointmentbtn'>Next</button></div>
                    </div>

                </Form>
            )}
        </Formik>
    )
}

const StepThree = ({ data, next, prev }) => {
    return (
        <Formik
            initialValues={data}
            onSubmit={(values) => next(values)}
        >
            {({ values, errors, touched }) => (
                <Form role="form" className="php-email-form" >
                    <div className="row formstyle">
                        <div className="col-md-4 form-group mt-3">
                            <Field
                                type="file"
                                name="file"
                                className="form-control"
                                // onBlur={handleBlur}
                                // onChange={(e) => setSelectedFile(e.target.files[0].size)}
                                // value={values.file}
                                accept=".jpg"
                            />
                            {/* {errors.file && touched.file ? <span className='error'>{errors.file}</span> : null} */}
                        </div>
                    </div>
                    <div className='btn' >
                        <div className="text-center"><button type="button" id='appointmentbtn' onClick={() => prev(values)}>Previous</button></div>
                        <div className="text-center"><button type="submit" id='appointmentbtn'>Submit</button></div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default StepForm;