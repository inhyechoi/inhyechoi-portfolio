import React from 'react';

const Header = () => {
    
    return (
      <div className="header">
        <a href="/" className="logo">
            <img src={require('../../assets/inhye-main-logo.svg')} alt="" style={{ width: "50%" }}/>
        </a>
        <div className="closeBtn hover-target" style={{ display: "none" }}>
          <span className="arrow"></span>
        </div>
        <ol>
            <li>
                <p>about</p>
            </li>
            <li>
                <p>project</p>
            </li>
            <li>
                <p>experiment</p>
            </li>
            <li>
                <div className="themeSwitchWrapper">
                    <label className="themeSwitch" htmlFor="checkbox">
                        <input type="checkbox" id="checkBox"/>
                        <div className="slider round"></div>
                    </label>
                    <em>Enable Dark Mode</em>
                </div>
            </li>
        </ol>
      </div>
    );
}

export default Header;
