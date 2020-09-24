import React from 'react';
import './ProjectItem.scss';
import useWindowWidth from '../../Hooks/useWindowWidth.js';

import desktopImage from '../../Assets/Images/Projects/Desktop/JJEntertainment.jpg';
import mobileImage from '../../Assets/Images/Projects/Mobile/JJEntertainment_changmo_jedharper_instagram_square.jpg'

console.log(desktopImage);
console.log(mobileImage);
const ProjectItem = ({ desktopImage, title, viewProject }) => {
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

    const { windowWidth } = useWindowWidth();
return(
    <div className="projectItem" style={{ backgroundImage: `url(${ imageUrl })`}}>
        {windowWidth >= 650 &&( 
            <>
            <div className="title">{title}</div> 
            <div className="viewProject">{viewProject}</div>
            </>
        )}  
    </div>
);
}; 

export default ProjectItem