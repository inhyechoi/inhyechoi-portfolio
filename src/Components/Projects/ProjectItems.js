import React from 'react';
import projects from '../../data.json';
import ProjectItemPage from '../../Pages/ProjectItemPage';
import './ProjectItems.scss';

import { Route, Link } from 'react-router-dom';

const ProjectItems = () => {

    return(
        <div className="projectItems">
          <div className="mansonry">
            {projects.map((el)=>{

                return(
                    <div className="projectItemBg item" key={el.id} >
                      <Link route={`/projects/projectitem` }>
                    <ul>
                      <li><img className="projectItemImg" src={el.picture} /></li>
                      <li>{el.title}</li>
                      <li>{el.category}</li>
                        {/* </Link> */}
                    </ul>
                      </Link>

                    <Route path={`/projects/:projectitem`} component={ProjectItemPage}/>
                  </div>
                );
            })}
          </div>
        </div>
    );
}; 

export default ProjectItems