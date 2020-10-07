import React from 'react';
import Header from './Components/Header/Header.js';
import SocialMedia from './Components/SocialMedia/SocialMedia.js';
import About from './Components/Home/About.js';
import Projects from './Components/Home/Projects.js';
import Experiment from './Components/Home/Experiment.js';
import Footer from './Components/Footer/Footer.js';
import ScrollTop from './Components/ScrollTop/ScrollTop';
// import { Controller, Scene } from 'react-scrollmagic';
// import { Tween, Timeline } from 'react-gsap';
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router';


import './App.scss';
import './Components/Home/About.scss';
import './Components/SplitText/SplitText.scss';
import './Components/LoginPage/Form.scss';
import './Components/Header/Header.scss';
import './Components/SocialMedia/SocialMedia.scss';
import './Components/Menu.scss';
import './Components/Home/Projects.scss';
import './Components/Home/Experiment.scss';
import './Components/LoginPage/LoginBox.scss';
import './Components/Footer/Footer.scss';
import './Components/ScrollTop/ScrollTop.scss';
import './mixins.scss';
import './variables.scss';
import './Style/fonts.scss';
import './Style/index.scss';


//for offset position

const App = () => {
    // const componentDidMount = () => {
    //     var rect = ReactDOM.findDOMNode(this)
    //       .getBoundingClientRect()
    // }

    return (
        <div className="App">
            <Header />
            <SocialMedia />
            <ScrollTop />
            <div className="middle">
            </div>
            {/* <Router>    
                <Link to="/about"></Link>

                <Switch>
                    <Route path="/about" component="{About}" />

                </Switch> */}
            {/* <Controller>
                <Scene
                    triggerHook="onLeave"
                    duration="300%"
                    pin
                >
                    <Timeline
                    wrapper={<div id="pinContainer" />}
                    >
                    <section className="panel blue"><span>Panel</span></section>
                    <Tween
                        from={{ x: '-100%' }}
                        to={{ x: '0%' }}
                    >
                        <section className="panel turqoise"><span>Panel</span></section>
                    </Tween>
                    <Tween
                        from={{ x: '100%' }}
                        to={{ x: '0%' }}
                    >
                        <section className="panel green"><span>Panel</span></section>
                    </Tween>
                    <Tween
                        from={{ y: '-100%' }}
                        to={{ y: '0%' }}
                    >
                        <section className="panel bordeaux"><span>Panel</span></section>
                    </Tween>
                    </Timeline>
                </Scene>
            </Controller> */}
            <About />
            <Projects />
            <Experiment />
            <Footer />
            {/* <Router exact path="/login">
            </Router> */}
            {/* </Router> */}
        </div>
    );
}

export default App
