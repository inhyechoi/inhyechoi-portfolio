import React from 'react';
// import ThemeSwitch from './ThemeSwitch';
import DarkModeToggle from '../Theme/index';


const Header = () => {
    // const [value, setValue] = useState(false);
    return (
      <header className="header">
        <a href="/" className="logo">
            <img src={require('../../Assets/inhye-main-logo.svg')} alt="frontend developer logo design web graphic" style={{ width: "50%" }}/>
        </a>
        <div className="closeBtn hover-target" style={{ display: "none" }}>
          <span className="arrow"></span>
        </div>
        <div className="menuWrapper">
            <div className="menuNav">
            <div className="menu">
                <p>about</p>
                <p>projects</p>
                <p>experiment</p>
                <p></p>
                <div class="menuLine"></div>
                <DarkModeToggle />
            </div>

            </div>
        </div>
            {/* <li>
                <p>       </p>
            </li>
            <li>
                <p>       </p>
            </li>
            <li>
                <p>            </p>
            </li> */}

              {/* <ThemeSwitch isOn={value} handleToggle={()=> setValue(!value)} onColor="#E65722"/> */}
      </header>
    );
}

export default Header;
