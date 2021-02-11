import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom'
import '../../assets/stylesheets/navbar.scss';
import cakedupLogo from '../../assets/images/cakedup.jpg';

const NavBar = (props) => {



    function logoutUser() {
        props.logout();

    }


    function getLinks() {
        if (props.loggedIn) {
            return (
                <div className='lefty'>
                    <button onClick={() => logoutUser()} className='logoutButton'>Logout</button>
                    {/* <Link to={'/profile'} className='profileButton'>Profile</Link> */}
                </div>
            );
        } else {
            return (
                <div className='right-navbar'>
                    <Link to={'/admin-login'} className='signinButton'>Sign in</Link>
                </div>
            );
        }
    }

    return (
    
        <div className='navbar-container'>
            <div className='nav-header-bar'>

                <div className='left-navbar'>    
                    <Link to='/'><img alt="" src={cakedupLogo} className='brand-icon'/></Link>
                    {/* <div className='brand-navbar'>Cakedup.sf</div> */}
                </div>

                <div>
                    {getLinks()}
                </div>
            </div>
        </div>
        

    )


}

export default NavBar;