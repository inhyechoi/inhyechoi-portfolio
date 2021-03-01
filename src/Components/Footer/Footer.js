import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../../Assets/Files/Inhye_Choi_Resume.pdf';

const Footer = () => {

    return(
    <footer className="footer">
        <div className="footerContainer">
            <div className="copyright">
                <div className="aboutBtnWrapper">
                    <a href={ Pdf } className="resumeBtn" download="Inhye_Choi_resume.pdf">Download Resume</a>
                </div>
                <p>© 2020 Inhye. All Rights Reserved.</p>
            </div>
            <div className="guideBtn">
                <Link to={'/designguide'}>design guide</Link>
                <a href="mailto:inhyechoi0404@gmail.com">contact me</a>
        </div>
        </div>
      </footer>
    );
};

export default Footer