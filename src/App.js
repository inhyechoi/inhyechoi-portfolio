import React from 'react';
import Header from './Components/Header/Header.js';
import SocialMedia from './Components/SocialMedia/SocialMedia.js';
// import About from './Components/Home/About.js';
// import Projects from './Components/Home/Projects.js';
// import Experiment from './Components/Home/Experiment.js';
import HomePage from './Pages/HomePage.js';
import Footer from './Components/Footer/Footer.js';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

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


const App = () => {

    return (
        <div className="App">
                <Header />
                <BrowserRouter>
                <SocialMedia />
                <ScrollTop />
                    <Switch>
                        <div className="middle">
                        </div>
                        <Route exact path="/">
                            <HomePage />
                        </Route>  
  

            {/* <Switch>
                <Route
                    path="/about"
                    component={About} 
                />
                <Route
                    path="/projects"
                    component={Projects} 
                />
                <Route 
                    path="/experiment"
                    component={Experiment}
                />
            </Switch> */}
            {/* <Router>    
                <Link to="/about"></Link>

                <Switch>
                    <Route path="/about" component="{About}" />

                </Switch> */}
                {/* <Router exact path="/login">
                </Router> */}
                </Switch>
                <Footer />
            </BrowserRouter>    
        </div>
    );
}

export default App
