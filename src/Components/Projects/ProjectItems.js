import React from 'react';
import projects from '../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProjectItems.scss';
import { faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import ProjectItem from './ProjectItem.js';

import { 
  Link,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';

const ProjectItems = () => {
  const { path } = useRouteMatch();

    return(
        <div className="projectItems">
          <div className="mansonry">
            {projects.map((el)=>{

                return(
                    <div className="projectItemsBg item" key={el.id} >
                      <img className="projectItemsImg" src={el.picture} />
                      <ul className="hover-items">
                        <li>
                          <a href={el.url}><FontAwesomeIcon className="fa fa-code" icon={faCode} /></a>
                        </li>
                        <li>
                          <Link to={`/projects/${el.title}`}><FontAwesomeIcon className="fa fa-paint-brush" icon={faPaintBrush} /></Link>
                        </li>
                      </ul>
                      <p>{el.title}</p>
                      <p>{el.category}</p>
                  </div>
                );
            })}
          </div>
          <Switch>
            <Route path={`${path}/:projectId`}>
              <ProjectItem />
            </Route>
            {/* exact will only returns the route if the path is an EXACT match to the current url */}
            <Route exact path={path} path='/projects'>
            </Route>
          </Switch>
    </div>
    );
}; 

export default ProjectItems