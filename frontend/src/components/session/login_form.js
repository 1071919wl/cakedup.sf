import React, { useState, useRef, useEffect } from "react";
import { withRouter } from 'react-router-dom';

const LoginForm = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



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
            <span className='login_title'>Customer Login</span>
            
            <div className='login_form_container'>

                <div className='left_login'>
                    <h2 className='sub_title'>Registered User</h2>
                    
                    <form onSubmit={sendMessage} className='login_form_box'>
                        <p>Sign in with your email address.</p>
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