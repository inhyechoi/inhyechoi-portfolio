import React from 'react';

import About from '../Components/Home/About';
// import { Controller, Scene } from 'react-scrollmagic';
import '../Style/index.scss';
import '../mixins.scss';
import '../variables.scss';
import '../Style/fonts.scss';
import '../Components/Home/About.scss';

const HomePage = () => {
    return(
        <div className="container">
            <h1 className="title">Home</h1>
            <div>
                <About />
            </div>
        </div>
    );
}

export default HomePage;