import React from 'react';
import './ProjectItem.scss';
import useWindowWidth from '../../Hooks/useWindowWidth.js';
import { projects } from '../../data'

import desktopImage from '../../Assets/Images/Projects/Desktop/JJEntertainment.jpg';
import mobileImage from '../../Assets/Images/Projects/Mobile/JJEntertainment_changmo_jedharper_instagram_square.jpg'


const ProjectItem = ({ viewProject }) => {

    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

    const { windowWidth } = useWindowWidth();
    return(
        <div className="projectItem" style={{ backgroundImage: `url(${ imageUrl })`}}>
{console.log("title" + projects[0].title)}

            {windowWidth >= 650 &&( 
                <>
                <div className="title">                     
                    {projects.map((data, key)=>{
                            console.log(key);
                        return(
                            <div key={key}>
                            {data.title}
                            </div>
                        );
                    })} 
                </div>
                <div className="viewProject">{viewProject}</div>
                </>
            )}  
        </div>
    );
}; 

export default ProjectItem