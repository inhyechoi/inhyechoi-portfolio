import React from 'react';
import { Link } from 'react-router-dom';
import About from '../Components/Home/About';
import Projects from '../Components/Home/Projects';
import Experiment from '../Components/Home/Experiment';
import { Controller, Scene } from 'react-scrollmagic';
import '../Style/index.scss';

const HomePage = () => {
    return(
        <div className="container">
            <h1>Home Page</h1>
            <p>
                <Link to="/jjent">JJENT</Link>
                <div className="scrollContainer">
                        <Controller>
                            <Scene duration={600} pin={true}>
                                <div><About /></div>
                            </Scene>
                            <Scene duration={600} pin={true}>
                                <div><Projects /></div>
                                {/* <div><Route exact path="/projects" component={Projects} /></div> */}
                            </Scene>  
                            <Scene duration={600} pin={true}>
                                <div><Experiment /></div>
                                {/* <div><Route exact path="/experiment" component={Experiment} /></div> */}
                            </Scene>
                              
                        </Controller>
                    </div>
            </p>
        </div>
    );
}

export default HomePage;