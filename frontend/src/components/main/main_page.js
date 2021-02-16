import React from 'react';
// import { Link } from 'react-router-dom'
import '../../assets/stylesheets/main.css';
import tempBG from '../../assets/images/main/temp.jpg';
import mainSec2 from '../../assets/images/main/mainSec2.jpg';
import gurl from '../../assets/images/main/gf0.jpg';
import endSec1 from '../../assets/images/main/endSec1.jpg';
import endSec2 from '../../assets/images/main/endSec2.jpg';

import {Parallax} from 'react-parallax';



const MainPage = (props) => {

    return (
        <div className='main_container'>
            <div className='navBar-main-container'>
                <h1>Home</h1>
                <h1>Menu</h1>
                <h1>Order</h1>
            </div>

            <Parallax bgImage={tempBG} bgImageStyle={{top: '-8%'}} strength={300} className='parallax_container'>
                <div className='title_container' style={{height: 700}}>
                    <h1 className='cake_type'>- BASQUE CHEESECAKES -</h1>
                    <h1 className='brand-name'>Cakedup.sf</h1>
                </div>
            </Parallax>
            
            {/* <div className='title_container'>
                <h1 className='cake_type'>- BASQUE CHEESECAKES -</h1>
                <h1 className='brand-name'>Cakedup.sf</h1>
            </div> */}

            <div className ='about_gurl_container' >
                <div className="mobile-gurl-name"> 
                    <h1>Alice Hu</h1>
                </div>

                <div className='gurl_container'>
                    <img alt="" src={gurl} className='main-gurl-img'/>
                </div>

                <div className="about_gurl_info">
                    <div className="about_gurl_name"> 
                        <h1 className='alice'>Alice Hu</h1>
                    </div>
                    <div>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​ This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.</p>
                    </div>
                    <div>
                        <p>Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                    </div>
                </div>

                {/* <div className="about">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div> */}
            </div>

            <Parallax bgImage={mainSec2} bgImageStyle={{top: '-30%'}} strength={500} className='parallax_container'>

                <div className='title_container' style={{height: 600}}>
                    <h1 className='cake_type'>-  BASQUE CHEESECAKES  -</h1>
                    <h1 className='brand-name'>Cakedup.sf</h1>
                </div>
            </Parallax>


            <div className ='about_gurl_container' >

                <div className='endSecPic_container'>
                    <img alt="" src={endSec1} className='endSec1'/>
                    <img alt="" src={endSec2} className='endSec2'/>
                </div>

                <div className="about_gurl_info">
                    <div className="about_gurl_name"> 
                        <h1>Alice Hu</h1>
                    </div>
                    <div>
                        <p>lorem ipsum dolor sit amet, consectet</p>
                    </div>
                    <div>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​ This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.</p>
                    </div>
                    <div>
                        <p>Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                    </div>
                </div>

                {/* <div className="about">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div> */}
            </div>


            <footer className='footer_container'>
                <div className='copyRight'>
                    <div>&copy;2020 by Cakedup.sf</div>
                </div>
                
            </footer>
        </div>
    );
    
}

export default MainPage;