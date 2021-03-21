import React from 'react';
import ProjectItems from './ProjectItems.js';

import './Projects.scss';

const Projects = () => {

    return(
        <section className="projectsWrapper">
            <div className="projectContainer">  
                <h1 className="titlePage">Projects</h1>  
                <ProjectItems />
            </div>
        </section>
    );
};

export default Projects