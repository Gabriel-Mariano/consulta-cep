import React from 'react';
import './style.css';

import {FaSearchLocation} from 'react-icons/fa';

function Button(){
    return(
        <button type="button">
            Pesquisar
            <FaSearchLocation style={{ marginLeft:'10px'}}/>
        </button>
    );
}

export default Button;