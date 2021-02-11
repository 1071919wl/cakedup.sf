import React from 'react';
import { Link } from 'react-router-dom'
import '../../assets/stylesheets/main.scss';
import tempBG from '../../assets/images/main/temp.jpg';


class MainPage extends React.Component {

    render() {
        return (
            <div className='main_container'>
                <div className='main-bg-sec1'>
                    <img alt="" src={tempBG} className='main-bg-img'/>
                </div>
                

                <footer className='footer_container'>
                    <div className='copyRight'>
                        <div>&copy;2020 by Cakedup.sf</div>
                    </div>
                    
                </footer>
            </div>
        );
    }
}

export default MainPage;