import React from 'react';
import Topbar from './components/TopBar.js';
import Menu from './components/Menu.js';
import Form from './components/LoginPage/Form.js';
// import Projectsmenu from "./ProjectsMenu";
// import ReactDOM from 'react-dom'; 
// import { projects } from './data.json';  


// import maintitle from './assets/inhyechoi-main-text.svg';

import './App.scss';
import'./components/LoginPage/Form.scss';
import './components/TopBar.scss';
import './components/Menu.scss';
import './components/Projects.scss';
import './components/ProjectsMenu.scss';
import './variables.scss';

//for offset position

const App = () => {
    // const componentDidMount = () => {
    //     var rect = ReactDOM.findDOMNode(this)
    //       .getBoundingClientRect()
    // }

    return (
        <Router>
            <div className="App">
                <Topbar />
                <div className="middle">
                </div>
                <Form />
                <Menu />
            </div>
        </Router>
    );
}

export default App
