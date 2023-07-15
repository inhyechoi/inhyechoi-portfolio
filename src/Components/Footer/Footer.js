import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return(
    <footer className="footer">
        <div className="footerContainer">
            <div className="copyright">
                <div className="aboutBtnWrapper">
                </div>
                <p>© 2020 Inhye. All Rights Reserved.</p>
            </div>
            <div className="guideBtn">
                <Link to={'/designguide'}>design guide</Link>
                <a href="mailto:iciw523@gmail.com">contact me</a>
        </div>
        </div>
      </footer>
    );
};

export default Footer