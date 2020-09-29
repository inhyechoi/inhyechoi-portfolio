import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SocialMedia.scss';

const SocialMedia = () => {

    return(
        <div className="socialBar">
            <a href='https://www.linkedin.com/in/inhyechoi/'> 
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://github.com/inhyechoi'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:inhyechoi0404@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    );
}

export default SocialMedia