import React from 'react';
import Sound from 'react-sound';
import Topbar from './components/TopBar.js';
import Menu from './components/Menu.js';
import ReactDOM from 'react-dom';

import maintitle from './assets/inhyechoi-main-text.svg';

import './App.scss';
import './components/Menu.scss';
import './components/TopBar.scss';
import './variables.scss';

//for offset position

const App = () => {
    // const componentDidMount = () => {
    //     var rect = ReactDOM.findDOMNode(this)
    //       .getBoundingClientRect()
    // }
  return (
    <div className="App">
        <Sound
        url="./assets/inhyechoi-main-bgm.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        // onLoading={this.handleSongLoading}
        // onPlaying={this.handleSongPlaying}
        // onFinishedPlaying={this.handleSongFinishedPlaying}
        />
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
