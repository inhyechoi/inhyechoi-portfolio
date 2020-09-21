import React, { useRef } from 'react';

const Header = () => {
    return (
      <div className="header">
        <a href="/" className="logo">
            <img src={require('../../assets/inhye-main-logo.svg')} alt="" style={{ width: "50%" }}/>
        </a>
        <div className="closebtn hover-target" style={{ display: "none" }}>
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
                <button className="toggle-menu hover-target">
                    <span></span>
                </button>
            </li>
        </ol>
      </div>
    );
}

export default Header;
