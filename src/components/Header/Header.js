import React, { useState } from 'react';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
    const [value, setValue] = useState(false);
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
              <ThemeSwitch isOn={value} handleToggle={()=> setValue(!value)} onColor="#E65722"/>
            </li>
        </ol>
      </div>
    );
}

export default Header;
