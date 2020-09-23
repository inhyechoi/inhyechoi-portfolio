import React,  { useState, useEffect } from 'react';
import './ProjectItem.scss';

import desktopImage from '../../Assets/Images/Projects/Desktop/JJEntertainment.jpg';
import mobileImage from '../../Assets/Images/Projects/Mobile/JJEntertainment_changmo_jedharper_instagram_square.jpg'

const ProjectItem = ({ desktopImage, title, viewProject }) => {
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;
    const useWindowWidth = () =>{
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);
    
    return windowWidth;
    };

return(
    <div className="projectBackgroundImage" style={{ desktopImage: `url(${imageUrl})`}}>
        <div className="title">{title}</div> 
        <div className="viewProject">{viewProject}</div>
    </div>
);
}; 

export default ProjectItem