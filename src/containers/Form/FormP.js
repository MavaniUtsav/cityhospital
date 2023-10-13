import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function FormP(props) {
    const [step, setStep] = useState(1);
    const stepper = [
        'Full Name',
        'Email & Password',
        'Upload File',
        'Confirmation'
    ];

    const formOneValidationSchema = yup.object().shape({
        first_name: yup.string().matches(/^[a-zA-Z ]+$/, '*Enter valid name').required(),
        last_name: yup.string().matches(/^[a-zA-Z ]+$/, '*Enter valid name').required(),
        email: yup.string().email('Enter valid email').required(),
        password: yup.string().required(),
        file: yup.mixed().required('Product Image is required')
    })

    const handleNextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        file: null
    }

    return (
        <div>
            <Box sx={{ width: '80%', margin: '25px auto' }}>
                <Stepper activeStep={step - 1} alternativeLabel>
                    {stepper.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Formik
                initialValues={initialValues}
                validationSchema={formOneValidationSchema}
                onSubmit={(values, actions) => {
                    // Simulate API call here (e.g., using setTimeout)
                    setTimeout(() => {
                        // alert('Form submitted successfully');
                        handleNextStep()
                        console.log(values);
                        actions.setSubmitting(false);
                    }, 2000);
                }}
            >
                {({ isSubmitting, values, errors, touched }) => (
                    <Form>
                        <div>
                            {step === 1 && (
                                <div className="row formstyle">
                                    <div className="col-md-4 form-group">
                                        <Field
                                            type="text"
                                            name="first_name"
                                            className="form-control"
                                            id="name"
                                            placeholder="First Name"
                                        />
                                        {/* {errors.first_name && touched.first_name ? <span className='error'>{errors.first_name}</span> : null} */}
                                        <ErrorMessage className='error' name='first_name' component="span" />
                                    </div>
                                    <div className="col-md-4 form-group">
                                        <Field
                                            type="text"
                                            name="last_name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Last Name"
                                        />
                                        <ErrorMessage className='error' name='last_name' component="span" />
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
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
                                        />
                                        <ErrorMessage className='error' name='email' component="span" />
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
                                        />
                                        <ErrorMessage className='error' name='password' component="span" />
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="row formstyle">
                                    <div className="col-md-4 form-group mt-3">
                                        <Field
                                            type="file"
                                            name="file"
                                            className="form-control"
                                            accept=".jpg"
                                        />
                                        <ErrorMessage className='error' name='file' component="span" />
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div id='successcard'>
                                    <div id="card">
                                        <div style={{ borderRadius: 200, height: 200, width: 200, background: '#F8FAF5', margin: '0 auto' }}>
                                            <i className="checkmark" id='i'>✓</i>
                                        </div>
                                        <h1 id='heading'>Submitted!</h1>
                                        <p id='p'>We received your submited Form<br /> we'll be in touch shortly!</p>
                                    </div>
                                </div>
                            )}

                            <div className='btn'>
                                {step > 1 && step < 4 && (
                                    <div className="text-center"><button type="button" id='appointmentbtn' onClick={handlePreviousStep}>Previous</button></div>
                                )}
                                {step < 3 && (
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            id='appointmentbtn'
                                            onClick={handleNextStep}
                                            disabled={
                                                (step === 1 &&
                                                    (!values.first_name || !values.last_name)) ||
                                                (step === 2 && (!values.email || !values.password))
                                            }
                                        >Next</button>
                                    </div>
                                )}
                                {step === 3 && (
                                    <div className="text-center"><button type="submit" id='appointmentbtn' disabled={isSubmitting}>Submit</button></div>
                                )}
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormP;