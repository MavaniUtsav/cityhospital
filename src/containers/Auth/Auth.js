import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';

function Auth(props) {
    const [type, setType] = useState('login')

    return (
        <section id="doctors" class="doctors">
            <div class="container">
                <div class="section-title">
                    {
                        type === 'login' ? <h2>Login</h2> : type === 'signup' ? <h2>Signup</h2> : <h2>Forgot password</h2>
                    }
                </div>
                <section id="appointment" class="appointment">
                    <form action="" method="post" role="form" class="php-email-form">
                        <div class="row justify-content-center">

                            {   

                                type === 'signup' ? <div class="col-md-8 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars" />
                                    <div class="validate"></div>
                                </div> : null
                            }

                            <div class="col-md-8 form-group mt-3 mt-md-0">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email"
                                    data-msg="Please enter a valid email" />
                                <div class="validate"></div>
                            </div>

                            {
                                type === 'login' || type === 'signup' ? <div class="col-md-8 form-group mt-3 mt-md-0">
                                <input type="password" class="form-control" name="password" id="phone" placeholder="Your password" data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
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