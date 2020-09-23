import React from 'react';
import Header from './components/Header/Header.js';
import About from './components/Home/About.js';
import Projects from './components/Home/Projects.js';
// import { Router } from 'react-router';
// import ReactDOM from 'react-dom'; 

import './App.scss';
import './components/Home/About.scss';
import './components/LoginPage/Form.scss';
import './components/Header/Header.scss';
import './components/Menu.scss';
import './components/Home/Projects.scss';
import './components/LoginPage/LoginBox.scss';
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
            <div className="middle">
            </div>
            <About />
            <Projects />
            {/* <Router exact path="/login">
            </Router> */}
        </div>
    );
}

export default App
