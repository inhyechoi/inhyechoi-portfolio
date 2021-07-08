import React from 'react';
import SocialMedia from './Components/SocialMedia/SocialMedia.js';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import Header from './Components/Header/Header.js';
import HomePage from './Pages/HomePage.js';
import ProjectPage from './Pages/ProjectPage.js';
import ExperimentPage from './Pages/ExperimentPage.js';
import DesignGuidePage from './Pages/DesignGuidePage.js';
import NotFoundPage from './Pages/NotFoundPage.js';
import Footer from './Components/Footer/Footer.js';
import CursorFocus from './Components/CursorFocus/index.js';
import ScrollToTop from './Components/ScrollTop/ScrollToTop.js';

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

import ProjectItem from './Components/Projects/ProjectItem.js';

const App = () => {
    return (
        <div id="outer-container" className="App" height="100%">
            <CursorFocus />
            <SocialMedia />
            <ScrollToTop />
            <ScrollTop />
                <Header />
                <div className="middle">
                </div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/projects/:projectId" component={ProjectItem}></Route>
                        <Route path="/projects" component={ProjectPage} />
                        <Route path="/experiment" component={ExperimentPage} />
                        <Route path="/designguide" component={DesignGuidePage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                <Footer /> 
        </div>
    );
}
export default App
