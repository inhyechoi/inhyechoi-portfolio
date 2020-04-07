import React from 'react';
import Sound from 'react-sound';
// import logo from './logo.svg';
import menutext1 from './assets/main-menu-text-1.svg';
import menutext2 from './assets/main-menu-text-2.svg';
import maintitle from './assets/inhye-world-text.svg';
import companytitle from './assets/2019inhyechoi.png';
import menuselect from './assets/menu-select.svg';
import './App.scss';
import './mixin.scss';
import './variables.scss';

function App() {
  return (
   
    <div className="App">
        <Sound
            url="./assets/supermarioworld-titletheme.mp3"
            playStatus={Sound.status.PLAYING}
            playFromPosition={300 /* in milliseconds */}
            // onLoading={this.handleSongLoading}
            // onPlaying={this.handleSongPlaying}
            // onFinishedPlaying={this.handleSongFinishedPlaying} 
        />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="App-header-text-container">
            <img src={maintitle} className="main-title" alt="" style={{ width: '100%' }}/>
            <div>
                <div className="menu-text-wrapper">
                    <img src={menuselect} className="menu-select" alt="" />
                    <img src={menutext1} className="menu-text-1" alt="" />
                </div>
                <div className="menu-text-wrapper">
                    <img src={menuselect} className="menu-select-2" alt="" />
                    <img src={menutext2} className="menu-text-2" alt="" />
                </div>
            </div>


            {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a> */}
            <img src={companytitle} className="company-title" alt="" />
            </div>    
      </header>

    </div>
  );
}

export default App;
