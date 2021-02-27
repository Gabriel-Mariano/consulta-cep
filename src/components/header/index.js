import React from 'react';
import Logo from '../../assets/Logo.png';

import './style.css';

function Header(){
    return(
        <>
        <header>
            <img src={Logo} alt="logo"/>
        </header>
        </>
    )
}

export default Header;