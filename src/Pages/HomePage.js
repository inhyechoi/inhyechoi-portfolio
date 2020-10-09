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
            <h1>Home Page</h1>
            <p>
            <About />
                {/* <div className="scrollContainer">
                        <Controller>
                            <Scene duration={600} pin={true}>
                                <div></div>
                            </Scene>
                            <Scene duration={600} pin={true}>
                                <div></div>
                            </Scene>  
                            <Scene duration={600} pin={true}>
                                <div></div>
                            </Scene>
                              
                        </Controller>
                    </div> */}
            </p>
        </div>
    );
}

export default HomePage;