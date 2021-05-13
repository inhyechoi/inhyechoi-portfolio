import React from 'react';
import projects from '../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectItemPage from '../../Pages/ProjectItemPage';
import './ProjectItems.scss';
import { faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

import { Route, Link } from 'react-router-dom';

const ProjectItems = () => {

    return(
        <div className="projectItems">
          <div className="mansonry">
            {projects.map((el)=>{

                return(
                    <div className="projectItemBg item" key={el.id} >
                      <img className="projectItemImg" src={el.picture} />
                      <ul className="hover-items">
                        <li>
                          <a href={el.url}><FontAwesomeIcon className="fa fa-code" icon={faCode} /></a>
                        </li>
                        <li>
                          <a href={el.url2}><FontAwesomeIcon className="fa fa-paint-brush" icon={faPaintBrush} /></a>                        </li>
                      </ul>
                      <p>{el.title}</p>
                      <p>{el.category}</p>
                  </div>
                );
            })}
          </div>
        </div>
    );
}; 

export default ProjectItems