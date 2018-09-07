import React from 'react';
import Tilt from 'react-tilt';
import logoIcon from './logo.svg';
import './Logo.css';

const Logo = () => {
    return (
        <div className ='ma4 mt5 center'>
            <Tilt className='Tilt br2 shadow-2' options= {{max:75}} style={{height:200,width:200}}>
                <div className='Tilt-inner pa3'>
                    <img src={logoIcon} alt='logo-icon' style= {{width: '350px',paddingTop:'5px'}}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;