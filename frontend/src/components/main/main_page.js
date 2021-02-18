import React from 'react';
// import { Link } from 'react-router-dom'
import '../../assets/stylesheets/main.css';

import tempBG from '../../assets/images/main/temp.jpg';
import cakeSplash from '../../assets/images/main/cake_splash.jpg';
import cakeSplash2 from '../../assets/images/main/cake_splash2.jpg';

import instagram from '../../assets/images/main/instagram.png';
import mainSec2 from '../../assets/images/main/mainSec2.jpg';
import gurl from '../../assets/images/main/gf0.jpg';
import endSec1 from '../../assets/images/main/endSec1.jpg';
import endSec2 from '../../assets/images/main/endSec2.jpg';

import quad1 from '../../assets/images/quad/q1.jpg';
import quad2 from '../../assets/images/quad/q2.jpg';
import quad3 from '../../assets/images/quad/q3.jpg';
import quad4 from '../../assets/images/quad/q4.jpg';

import ModalContainer from '../modal/modal_container';

import {Parallax} from 'react-parallax';



const MainPage = (props) => {


    let rootElement = document.documentElement;

    const scrollToTop = () => {
      rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    return (
        <div className='main_container'>
            <ModalContainer />
            
            <div className='navBar-main-container'>
                <div className='navBar-main-select'>
                    <h1 id='home' onClick={() => scrollToTop()}>Home</h1>
                    <h1 onClick={() => props.openModal('request')}>Menu</h1>
                    {/* <h1 onClick={() => props.openModal('request')}>Order</h1> */}
                </div>
                <div>
                    <a href='https://www.instagram.com/cakedup.sf/'>
                        <img alt="isnta" src={instagram} className='instagram'/>
                    </a>
                </div>
            </div>

            <Parallax bgImage={cakeSplash} bgImageStyle={{top: '-35%'}} strength={300} className='parallax_container'>
                <div className='title_container' style={{height: 680}}>
                    <h1 className='cake_type'>- BASQUE CHEESECAKES -</h1>
                    <h1 className='brand-name'>Cakedup.sf</h1>
                </div>
            </Parallax>

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
            </div>

            <Parallax bgImage={mainSec2} bgImageStyle={{top: '-30%'}} strength={400} className='parallax_container'>

                <div className='title_container' style={{height: 600}}>
                    <h1 className='cake_type'>-  BASQUE CHEESECAKES  -</h1>
                    <h1 className='brand-name'>Cakedup.sf</h1>
                </div>

            </Parallax>


            <div className ='about_gurl_container' >

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

                <div className='quadSecPic_container'>
                    <div>
                        <img alt="" src={quad1} className='q1'/>
                        <img alt="" src={quad2} className='q2'/>
                    </div>
                    <div>
                        <img alt="" src={quad3} className='q3'/>
                        <img alt="" src={quad4} className='q4'/>
                    </div>
                </div>
            </div>

            <Parallax bgImage={cakeSplash2} bgImageStyle={{top: '-25%'}} strength={400} className='parallax_container'>

                <div className='title_container' style={{height: 500}}>
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