import React from 'react';
import ProjectsItemItem from '../Components/Projects/ProjectItemItem';
import '../Style/index.scss';
import '../mixins.scss';
import '../variables.scss';
import '../Components/Projects/ProjectItemItem.scss';

const ProjectItemPage = () => {
    return(
        <div className="container">
            <ProjectsItemItem />
        </div>
    );
}

export default ProjectItemPage;