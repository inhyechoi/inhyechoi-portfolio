import React from 'react';
import './ProjectItem.scss';

const ProjectItem = ({ backgroundimage, title, viewProject }) => {

    const IMAGE_BASE_URL = "../../assets/images/";
    const backgroundStyle = {
        color: 'blue',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '400px',
        backgroundimage: `url(${IMAGE_BASE_URL}${backgroundimage})`
    }

return(
    <div className="backgroundImage" backgroundimage={backgroundimage !== undefined ? backgroundStyle : null}>
        <div className="title">{title}</div> 
        <div className="viewProject">{viewProject}</div>
    </div>
);
};

export default ProjectItem