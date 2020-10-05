import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleUp } from '@fortawesome/free-solid-svg-icons';

import './ScrollTop.scss';

const ScrollTop = () => {
    return(
        <>
        <div className="scrollTopBar">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}> 
                <FontAwesomeIcon className="fa fa-a-up" icon={faAngleUp} />
            </button>
        </div>
        </>
    );
}

export default ScrollTop