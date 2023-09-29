import React from 'react';
import InputBox from '../../components/UI/InputBox/InputBox';
import * as yup from 'yup';
import { useFormik } from 'formik';

function Appointment(props) {

    const appointmentSchema = yup.object().shape({
        name: yup.string().required('Please fill this field').matches(/^[a-zA-Z ]{3,15}$/, 'Please enter valid name'),
        email: yup.string().email('Please enter valid email').required('Please fill this field'),
        phone: yup.string().matches(/^[0-9]{10,10}$/, 'Phone number is not valid'),
        date: yup.string().required('Please fill this field'),
        department: yup.string().required(),
        message: yup.string().min(20, 'Please enter minimum 20 charachter').max(100, 'Maximum 100 charachter are allowed').required('Please fill this field')
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: appointmentSchema
    })

    const { handleSubmit, handleBlur, handleChange, errors, touched, values } = formikObj;


    return (
        <section id="appointment" className="appointment">
            <div className="container">
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
                            {errors.name && touched.name ? <span>{errors.name}</span> : null}
                            <div className="validate" />
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
                            {errors.email && touched.email ? <span>{errors.email}</span> : null}
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
                            {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}
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
                            {errors.date && touched.date ? <span>{errors.date}</span> : null}
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
                                <option value>Select Department</option>
                                <option value="Department 1">Department 1</option>
                                <option value="Department 2">Department 2</option>
                                <option value="Department 3">Department 3</option>
                            </select>
                            {errors.department && touched.department ? <span>{errors.department}</span> : null}
                            <div className="validate" />
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
                            value={values.message.charAt(0).toUpperCase() + values.message.slice(1)}
                        />
                        {errors.message && touched.message ? <span>{errors.message}</span> : null}
                        <div className="validate" />
                    </div>
                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit" id='appointmentbtn'>Make an Appointment</button></div>
                </form>
            </div>
        </section>

    );
}

export default Appointment;