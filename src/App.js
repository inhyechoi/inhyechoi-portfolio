import React from 'react';
import Sound from 'react-sound';
// import logo from './logo.svg';
import maintitle from './assets/inhyechoi-main-text.svg';
import menuselect from './assets/inhyechoi-main-menu-select.svg';
import './App.scss';
import './variables.scss';

function App() {
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
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="App-header-text-container">
            <img src={maintitle} className="main-title" alt="" style={{ width: '100%' }}/>
            <div>
                <div className="main-menu-text-wrapper">
                    <img src={menuselect} className="menu-select" alt="" />
                    <div className="main-menu-text">
                        <p>1.projects</p>
                        <p>2.about me</p>
                    </div>
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
            <div className="main-page-copyright">
                <p>© 2019 inhyechoi</p>
            </div>
            </div>    
      </header>

    </div>
  );
}

export default App;
