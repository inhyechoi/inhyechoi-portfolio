import React from 'react';
import projects from '../../data.json'
import './ProjectItem.scss';

const ProjectItem = () => {
    {projects.map((el)=>{

        return(
            <div className="projectItemBg item" key={el.id} >
                hello
            <ul>
              <li><img className="projectItemImg" src={el.picture} /></li>
              <li>{el.title}</li>
              <li>{el.category}</li>
                {/* </Link> */}
            </ul>

          </div>
        );
    })}
}; 

export default ProjectItem