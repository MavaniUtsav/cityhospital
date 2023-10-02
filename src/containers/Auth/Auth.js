import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import InputBox from '../../components/UI/InputBox/InputBox';
import * as yup from 'yup';
import { useFormik } from 'formik';

function Auth(props) {
    const [type, setType] = useState('login');

    let authObj, initVal;
    if (type === 'login') {
        authObj = {
            email: yup.string().email().required(),
            password: yup.string().required().min(8, '*Minimum 8 charachter required')
        }
        initVal = {
            email: '',
            password: ''
        }
    } else if (type === 'signup') {
        authObj = {
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required().min(8, '*Minimum 8 charachter required'),
            con_password: yup.string().required().test("con_password", "Password is not same", function (val) {
                if (val === this.parent.password) {
                    return true;
                } else {
                    return false;
                }
            })
        }
        initVal = {
            name: '',
            email: '',
            password: '',
            con_password: ''
        }
    } else if (type === 'forgot') {
        authObj = {
            email: yup.string().email().required(),
        }
        initVal = {
            email: ''
        }
    }


    const authSchema = yup.object().shape(authObj);

    const formikObj = useFormik({
        initialValues: initVal,
        onSubmit: values => {
            console.log(values);
        },
        enableReinitialize: true,
        validationSchema: authSchema
    })

    const { handleSubmit, handleBlur, handleChange, handleReset, errors, touched, values } = formikObj;

    return (
        <section id="doctors" class="doctors">
            <div class="container">
                <div class="section-title">
                    {
                        type === 'login' ? <h2>Login</h2> : type === 'signup' ? <h2>Signup</h2> : <h2>Forgot password</h2>
                    }
                </div>
                <section id="appointment" class="appointment">
                    <form onSubmit={handleSubmit} role="form" class="php-email-form">
                        <div class="row justify-content-center">

                            {

                                type === 'signup' ? <div class="col-md-8 form-group">
                                    <InputBox
                                        type="text"
                                        name="name"
                                        class="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorText={errors.name && touched.name ? errors.name : ''}
                                    />
                                </div> : null
                            }

                            <div class="col-md-8 form-group mt-3 mt-md-0">
                                <InputBox
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errorText={errors.email && touched.email ? errors.email : ''}
                                />
                            </div>

                            {
                                type === 'login' || type === 'signup' ? <div class="col-md-8 form-group mt-3 mt-md-0">
                                    <InputBox
                                        type="password"
                                        class="form-control"
                                        name="password"
                                        id="phone"
                                        placeholder="Your password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorText={errors.password && touched.password ? errors.password : ''}
                                    />
                                </div> : ''
                            }

                            {
                                type === 'signup' ? <div class="col-md-8 form-group mt-3 mt-md-0">
                                    <InputBox
                                        type="password"
                                        class="form-control"
                                        name="con_password"
                                        id="phone"
                                        placeholder="Confirm password"
                                        value={values.con_password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorText={errors.con_password && touched.con_password ? errors.con_password : ''}
                                    />
                                </div> : ''
                            }


                            <div class="text-center">
                                {
                                    type === 'login' ? <Button type="submit">Login</Button> :
                                        type === 'signup' ? <Button btnType="secondry" type="submit">Signup</Button> :
                                            <Button btnType="outline" type="submit">Submit</Button>
                                }
                            </div>
                        </div>
                    </form>
                    <div id='form_footer'>
                        {
                            type === 'login' ? <span id='btn'>Create an Account?  <a href='#' onClick={() => setType('signup')}>Signup</a></span> :
                                <span id='btn'>Already have Account?  <a href='#' onClick={() => setType('login')}>Login</a></span>
                        }
                        {
                            type === 'login' ? <a href='#' onClick={() => setType('forgot')}>Forgot your password?</a> : null
                        }
                    </div>

                </section>
            </div>
        </section>
    );
}

export default Auth;