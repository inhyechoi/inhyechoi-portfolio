import React from 'react';
// import logo from './logo.svg';
import menutext1 from './assets/main-menu-text-1.svg';
import menutext2 from './assets/main-menu-text-2.svg';
import maintitle from './assets/inhye-world-text.svg';
import companytitle from './assets/2019inhyechoi.png';
import './App.scss';
import './mixin.scss';
import './variables.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <img src={maintitle} className="main-title" alt="" />
            <img src={menutext1} className="menu-text-1" alt="" />
            <img src={menutext2} className="menu-text-2" alt="" />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <img src={companytitle} className="company-title" alt="" />
      </header>

    </div>
  );
}

export default App;
