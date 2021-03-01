import React from 'react';
import projects from '../../data.json';
import { Link } from 'react-router-dom';
import './ProjectItem.scss';

const ProjectItem = () => {

    return(
        <div className="projectItem">
            {projects.map((el)=>{

                return(
                    <div className="projectItemBg" key={el.id} 
                style={{backgroundImage: `url(${el.picture})`, width: 300, height: 300, backgroundSize: 'cover', display: `block`}}>
                    <ul>
                        <li>{el.title}</li>
                        {/* <li><a href={`${el.url}`}>view project</a></li> */}
                        <li><a href={`${el.url}`}>view project</a></li>
                        <Link to={'/projectsitem'}>view project</Link>

                        <li>{el.category}</li>
                    </ul>
                </div>
                );
            })}

        </div>
    );
}; 

export default ProjectItem