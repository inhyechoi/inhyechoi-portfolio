import React from 'react';
import ProjectItem from './ProjectItem.js';

import './Projects.scss';

const Projects = () => {

    return(
        <section className="projectsWrapper">
            <div className="projectContainer">  
                <h1 className="titlePage">Projects</h1>  
                <ProjectItem />
            </div>
        </section>
    );
};

export default Projects