import React from 'react';

import About from '../Components/Home/About';
// import { Controller, Scene } from 'react-scrollmagic';
import '../Style/index.scss';
import '../mixins.scss';
import '../variables.scss';
import '../Components/Home/About.scss';

const HomePage = () => {
    return(
        <div className="container" style={{height: `100%`}}>
            <h1 className="titlePage">Home</h1>
            <div>
                <About />
            </div>
        </div>
    );
}

export default HomePage;