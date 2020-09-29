import React from 'react';
import Header from './Components/Header/Header.js';
import SocialMedia from './Components/SocialMedia/SocialMedia.js';
import About from './Components/Home/About.js';

// import Projects from './Components/Home/Projects.js';
// import { Router } from 'react-router';
// import ReactDOM from 'react-dom'; 

import './App.scss';
import './Components/Home/About.scss';
import './Components/LoginPage/Form.scss';
import './Components/Header/Header.scss';
import './Components/SocialMedia/SocialMedia.scss';
import './Components/Menu.scss';
import './Components/Home/Projects.scss';
import './Components/LoginPage/LoginBox.scss';
import './variables.scss';


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
            <div className="middle">
            </div>
            <About />
            {/* <Projects /> */}
            {/* <Router exact path="/login">
            </Router> */}
        </div>
    );
}

export default App
