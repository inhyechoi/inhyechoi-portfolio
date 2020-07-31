import React from 'react';
import Topbar from './components/TopBar.js';
import Menu from './components/Menu.js';
import { useForm } from "react-hook-form";
// import Projectsmenu from "./ProjectsMenu";
// import ReactDOM from 'react-dom'; 
// import { projects } from './data.json';  


// import maintitle from './assets/inhyechoi-main-text.svg';

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
    const { handleSubmit, errors } = useForm();
    const onSubmit = (data)=>{
        console.log(data)
    };

  return (
    <div className="App">
        <Topbar />
        <div className="middle">
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="namebox">
            <p>Welcome, what is your name?</p>
            <div>
                <input className="textbox" type="name" placeholder="Your name" aria-invalid={errors.name ? "true" : "false"} />
                    {errors.name && errors.name.type === 'Yourname is required'}
                    {errors.name && errors.name.type === 'Max length exceeded'}
                <input className='submitbox' type="image" src={require('./assets/icon-mushroom.png')} alt='Submit'/>
            </div>
        </form>
        <Menu />
        </div>
  );
}

export default App
