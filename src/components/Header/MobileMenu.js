import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu';
import './MobileMenu.scss';

const MobileMenu = () => {
    
    const [menuOpenState, setMenuOpenState] = useState(false)

    const MyContext = React.createContext();

    // const showSettings = event =>{
    //     event.preventDefault();
    // }
  return (
        <div className="mobileMenu"> 
            <Menu right>
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
            </Menu>
        </div>
  )
}

export default MobileMenu