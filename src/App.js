import React from 'react';
import Header from './Components/Header/Header.js';
import SocialMedia from './Components/SocialMedia/SocialMedia.js';
import HomePage from './Pages/HomePage.js';
import ProjectPage from './Pages/ProjectPage.js';
import ExperimentPage from './Pages/ExperimentPage.js';
import Footer from './Components/Footer/Footer.js';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import './Components/Home/About.scss';
import './Components/SplitText/SplitText.scss';
import './Components/LoginPage/Form.scss';
import './Components/Header/Header.scss';
import './Components/SocialMedia/SocialMedia.scss';
import './Components/Projects/Projects.scss';
import './Components/Experiment/Experiment.scss';
import './Components/LoginPage/LoginBox.scss';
import './Components/Footer/Footer.scss';
import './Components/ScrollTop/ScrollTop.scss';
import './mixins.scss';
import './variables.scss';
import './Style/index.scss';
import './App.scss';

const App = () => {

    return (
        <div className="App">
                <Header />
                <SocialMedia />
                <ScrollTop />
                {/* <HomePage /> */}
                <div className="middle">
                        </div>
                    <Switch>
                        {/* <Route path="/" exact render={ () => <HomePage/>} /> */}
                        <Route exact path="/" component={HomePage} />
                        <Route path="/projects" component={ProjectPage} />
                        <Route parth="/experiment" component={ExperimentPage} />
                    </Switch>
                <Footer /> 
        </div>
    );
}

export default App
