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
        <div className="mobileMenuContainer">
        <div className="mobileMenu" id="outer-container" style={{height: `100%`}}> 
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