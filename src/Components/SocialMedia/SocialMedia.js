import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './SocialMedia.scss';

const SocialMedia = () => {

    return(
        <div className="socialBar">
            <a href='https://www.linkedin.com/in/inhyechoi/'> 
                <FontAwesomeIcon className="fa fa-li" icon={faLinkedinIn} />
            </a>
            <a href='https://github.com/inhyechoi'>
                <FontAwesomeIcon className="fa fa-gh" icon={faGithubAlt} />
            </a>
            <a href="mailto:inhyechoi0404@gmail.com">
                <FontAwesomeIcon className="fa fa-e" icon={faEnvelope} />
            </a>
        </div>
    );
}

export default SocialMedia