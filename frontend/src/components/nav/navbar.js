import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom'

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

                    
                    {/* <Link to='/'><img alt="" src={dino2} className='brand-icon'/></Link> */}
                    {/* <div className='brand-navbar'>{tbdevelopedHeader()}</div> */}


                </div>

                <div>{getLinks()}</div>
            </div>
        </div>
        

    )


}

export default NavBar;