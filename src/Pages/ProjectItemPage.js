import React from 'react';
import ProjectItem from '../Components/Projects/ProjectItem';
import '../Style/index.scss';
import '../mixins.scss';
import '../variables.scss';
import '../Components/Projects/ProjectItem.scss';

const ProjectItemPage = () => {
    return(
        <div className="container">
            <ProjectItem />
        </div>
    );
}

export default ProjectItemPage;