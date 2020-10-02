import React from 'react';
import Header from './Components/Header/Header.js';
import SocialMedia from './Components/SocialMedia/SocialMedia.js';
import About from './Components/Home/About.js';
import Projects from './Components/Home/Projects.js';
import Experiment from './Components/Home/Experiment.js';
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router';


import './App.scss';
import './Components/Home/About.scss';
import './Components/LoginPage/Form.scss';
import './Components/Header/Header.scss';
import './Components/SocialMedia/SocialMedia.scss';
import './Components/Menu.scss';
import './Components/Home/Projects.scss';
import './Components/Home/Experiment.scss';
import './Components/LoginPage/LoginBox.scss';
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
            <div className="middle">
            </div>
            {/* <Router>    
                <Link to="/about"></Link>

                <Switch>
                    <Route path="/about" component="{About}" />

                </Switch> */}
            <About />
            <Projects />
            <Experiment />
            {/* <Router exact path="/login">
            </Router> */}
            {/* </Router> */}
        </div>
    );
}

export default App
