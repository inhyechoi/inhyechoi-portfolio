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
        <ol>
            {/* <li>
                <p>about</p>
            </li>
            <li>
                <p>project</p>
            </li>
            <li>
                <p>experiment</p>
            </li> */}
            <li>
                <p>       </p>
            </li>
            <li>
                <p>       </p>
            </li>
            <li>
                <p>            </p>
            </li>
            <li>
                <DarkModeToggle />
              {/* <ThemeSwitch isOn={value} handleToggle={()=> setValue(!value)} onColor="#E65722"/> */}
            </li>
        </ol>
      </header>
    );
}

export default Header;
