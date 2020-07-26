import React from 'react';
import Topbar from './components/TopBar.js';
import Menu from './components/Menu.js';
// import Projectsmenu from "./ProjectsMenu";
// import ReactDOM from 'react-dom'; 
// import { projects } from './data.json';  


import maintitle from './assets/inhyechoi-main-text.svg';

import './App.scss';
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
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Topbar />
        <div className="middle">
            <img src={maintitle} className="main-title" alt="" style={{ width: "100%" }}/>
        </div>
        <form className="namebox">
            <p>Welcome, what is your name?</p>
            <div>
                <input className="textbox" type="name" placeholder="Your name"></input>
                <input className='submitbox' type='image' src={require('./assets/icon-mushroom.png')} alt='Submit'/>
            </div>
        </form>
        <Menu />
          <div className="copyright">
            <p>© 2019 inhyechoi</p>
          </div>
        </div>
  );
}

export default App
