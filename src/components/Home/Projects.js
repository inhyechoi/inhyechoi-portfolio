import React from 'react';
import ProjectItem from './ProjectItem.js';
import './Projects.scss';
// import { JJEntertainment } from '../../Assets/Images/Projects/Desktop'

const Projects = () => {
    // const projectsItemList =[
    //     {
    //         title: "JJEntertainment",
    //         text: `Ux and Ui design for JJEntertainment's responsive website`,
    //         backgroundimage: JJEntertainment,  
    //     }
    // ]
    return(
        <section className="projectsWrapper">
            {/* {projectsItemList.map((item) =>(
                <ProjectItem {...item} key={item.title}/>
            ))} */}
            <ProjectItem />
        </section>
    );
};

export default Projects