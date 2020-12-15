import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu';
import './MobileMenu.scss';
import './OnClickOutside.js';
import OnClickOutside from './OnClickOutside.js';

const MobileMenu = () => {

    const [menuOpenState, setMenuOpenState] = useState(false)

    const MyContext = React.createContext();

    const ref = useRef(null);

    const handleClickOutside = () => {
        // Your custom logic here
        console.log('clicked outside')
      }
      const handleClickInside = () => {
        // Your custom logic here
        console.log('clicked inside')
      }

    OnClickOutside(ref, handleClickOutside)
    
  return (
        <div className="mobileMenuContainer">
            <div ref={ref} className="mobileMenu" id="outer-container" style={{height: `100%`}} onClick={handleClickInside}> 
            <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container"} isOpen={ false } style={{ height: `100%`, overFlow: `auto`}}>
                <main id="page-wrap">
                    <MyContext.Provider value={{
                        isMenuOpen: menuOpenState,
                        toggleMenu: () => setMenuOpenState(!menuOpenState),
                        stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
                        
                    }}>
                    </MyContext.Provider>
                    <Link id="home "to={'/'} className="menu-item">home</Link>
                    <Link id="projects" to={'/projects'} className="menu-item">projects</Link>
                    <Link id="experiment" to={'/experiment'} className="menu-item">experiment</Link>
                    {/* <a onClick={ showSettings } className="menu-item--small" href="/">Settings</a> */}
                </main>
            </Menu>
            </div>
        </div>
  )
}

export default MobileMenu