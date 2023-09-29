import React from 'react';
import InputBox from '../../components/UI/InputBox/InputBox';
import * as yup from 'yup';
import { useFormik } from 'formik';

function Appointment(props) {

    const date = new Date()
    date.setDate(date.getDate() - 1);

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
            .test("FILE_SIZE", "Uploaded file is too big.",
                value => !value || (value && value.size <= 2))
            .test("FILE_FORMAT", "Uploaded file has unsupported format.",
                value => !value || (value && jpg.includes(value.type)))
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
            let arr = values.message.split(" ");

            let arrOne = arr.map((v) => {
                return v[0].toUpperCase() + v.substring(1)
            })
            let arrTwo = arrOne.join(" ")
            values.message = arrTwo
            console.log(arrTwo);

            console.log(values);
            alert(JSON.stringify(values, null, 2));
            handleReset()
        },
        validationSchema: appointmentSchema
    })

    const { handleSubmit, handleBlur, handleChange, handleReset, errors, touched, values } = formikObj;


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
                            {errors.name && touched.name ? <span className='error'>{errors.name}</span> : null}
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
                                value={values.file}
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
                    <div className="text-center"><button type="submit" id='appointmentbtn'>Make an Appointment</button></div>
                </form>
            </div>
        </section>

    );
}

export default Appointment;