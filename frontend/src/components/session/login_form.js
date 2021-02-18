import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import '../../assets/stylesheets/login.scss';
// import cakedupLogo from '../../assets/images/cakedup.jpg';

const LoginForm = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        props.removeErrors();
    },[])

    function sendMessage(e){
        e.preventDefault();

        const user = {
            email: email,
            password: password
        };

        props.login(user)
    }

    return (
        <div className='userAuth'>
            
            <div className='login_form_container'>

                <div className='left_login'>
                    <h2 className='login_logo'>Cakedup.sf</h2>
                    <h2 className='sub_title'>Sign in</h2>
                    <p>Sign in with your email address.</p>
                    
                    <form onSubmit={sendMessage} className='login_form_box'>


                        <label className='email_login'>Email<span className='asterisk'>*</span>
                                <input className='login_input' type="text"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className='name_input_area'
                                />
                        </label>

                        <label className='password_login'>Password<span className='asterisk'>*</span> 
                                <input className='login_input' type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className='name_input_area'
                                />
                        </label>

                        {props.errors.map((err,i) => {
                            return (
                                <div key={i} className='error_message'>
                                    {err}
                                </div>
                            )
                        })}

                        <button type="submit" value="Sign In" className='signin-Button'>Sign In</button>
                    </form>
                    <div className='error_message'>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default withRouter(LoginForm);