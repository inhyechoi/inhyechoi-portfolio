import React, { useState }from 'react';
import DarkModeToggle from '../Theme/index.js';
import { Link } from 'react-router-dom';

const Header = () => {
    
    /*add scroll animation */
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
    /*toggle open on click hamburger icon*/
        const [open, setOpen] = useState(false);

        const toggleMenu = () => {
          setOpen(!open);
        };

    return (
      <header className="header">
        <a href="/" className="logo">
            <img src={require('../../Assets/inhye-main-logo.svg')} alt="frontend developer logo design web graphic" style={{ width: "50%" }}/>
        </a>
        <div className="closeBtn hover-target" style={{ display: "none" }}>
          <span className="arrow"></span>
        </div>
        <div className="mobileMenu" onClick={toggleMenu}> 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="menuWrapper">
            <div className="menuNav">
            <div className="menu">
                <p>
                    <Link to={'/'} className="nav-link">about</Link>    
                </p>
                <p>
                    <Link to={'/projects'} className="nav-link">projects</Link>
                </p>
                <p>
                    <Link to={'/experiment'} className="nav-link">experiment</Link>
                </p>
                <p></p>
                <div className="menuLine"></div>
                <DarkModeToggle />
            </div>
            </div>
        </div>
        <div className="progress"></div>

      </header>
    );
}

export default Header;
