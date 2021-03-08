import React from 'react';

import { Link } from 'react-router-dom';
import './MobileMenu.scss';

const MobileMenu = () => {
    
  return (
        <div className="mobileMenuContainer">
            <Link id="home "to={'/'} className="menu-item">home</Link>
            <Link id="projects" to={'/projects'} className="menu-item">projects</Link>
            <Link id="experiment" to={'/experiment'} className="menu-item">experiment</Link>
        </div>
  )
}

export default MobileMenu