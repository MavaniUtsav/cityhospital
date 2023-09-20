import React, { useState } from 'react';

function Auth(props) {
    const [type, setType] = useState('login')

    return (
        <section id="doctors" class="doctors">
            <div class="container">
                <div class="section-title">
                    {
                        type === 'login' ? <h2>Login</h2> : <h2>Signup</h2>
                    }
                </div>
                <section id="appointment" class="appointment">
                    <form action="" method="post" role="form" class="php-email-form">
                        <div class="row justify-content-center">

                            {   

                                type === 'login' || 'signup' ? null : <div class="col-md-8 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars" />
                                    <div class="validate"></div>
                                </div>
                            }

                            <div class="col-md-8 form-group mt-3 mt-md-0">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email"
                                    data-msg="Please enter a valid email" />
                                <div class="validate"></div>
                            </div>

                            <div class="col-md-8 form-group mt-3 mt-md-0">
                                <input type="tel" class="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>

                            <div class="text-center">
                                {
                                    type === 'login' ? <button type="submit">Login</button> : <button type="submit">Signup</button>
                                }
                            </div>
                        </div>
                    </form>
                    {
                        type === 'login' ? <span>Create an Account <button onClick={() => setType('signup')}>Signup</button></span> :
                            <span>Already have Account? <button onClick={() => setType('login')}>Login</button></span>
                    }
                </section>
            </div>
        </section>
    );
}

export default Auth;