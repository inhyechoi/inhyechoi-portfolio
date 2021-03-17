import React, {useState} from 'react';
import DarkModeToggle from '../Theme/index.js';
import { Link } from 'react-router-dom';
// import MobileMenu from './MobileMenu.js';
import { ReactComponent as CloseMenu } from "../../Assets/cross.svg";
import { ReactComponent as MenuIcon } from "../../Assets/hamburger.svg"
import { ReactComponent as Logo } from "../../Assets/inhye-main-logo.svg";
import "./Header.scss";

const Header = () => {
    
    /*add scroll animation */
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);

    //credit to Sean Dever
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
      <header>
        {/* <a href="/" className="logo">
            <img 
            src={require('../../Assets/inhye-main-logo.svg').default} 
            alt="frontend developer logo design web graphic" style={{ width: "50%" }}/>
        </a>
        <div className="closeBtn hover-target" style={{ display: "none" }}>
          <span className="arrow"></span>
        </div> */}
 <div className="header menuWrapper">
      <div className="logo-nav menuNav">
        <div className="logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options menu"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to={'/'} className="nav-link mask">about</Link>    
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to={'/projects'} className="nav-link">projects</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to={'/experiment'} className="nav-link">experiment</Link>
          </li>
          {/* <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#">SIGN-IN</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="" className="sign-up">
              darkmode
            </a>
          </li> */}
        </ul>
      </div>
      <DarkModeToggle />
      {/* <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">SIGN-IN</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className="signup-btn">
            SIGN-UP
          </a>
        </li>
      </ul> */}
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
        
      </div>
    </div>


        {/* <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
            <Logo className="logo" alt="frontend developer logo design web graphic"/>
          </a>
        </div>
        </div>
        <div className="menuWrapper" style={{height: `100%`}}>
        <div className="menuNav">
            <ul className={click ? "nav-options active" : "nav-options menu"}>
            <li className="option" onClick={closeMobileMenu}>
                <Link to={'/'} className="nav-link mask">about</Link>    
            </li>
            <li className="option" onClick={closeMobileMenu}>
                <Link to={'/projects'} className="nav-link">projects</Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
                <Link to={'/experiment'} className="nav-link">experiment</Link>
            </li>
            </ul>
        </div>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
        </div> */}

        {/* <div className="menuWrapper"  style={{height: `100%`}}>
            <div className="menuNav">
            <div className="menu">
                <p>
                    <Link to={'/'} className="nav-link mask">about</Link>    
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
        </div> */}
        <div className="progress"></div>

      </header>
    );
}

export default Header;