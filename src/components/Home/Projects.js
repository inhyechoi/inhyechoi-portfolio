import React from 'react';
import ProjectItem from './ProjectItem.js';
import { Controller, Scene } from 'react-scrollmagic';

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
            <div className="container projectContainer">   
                <h1 className="title">Projects</h1>                   
                <Controller>
                    <Scene duration={600} pin={true} enbabled={true}>
                        <div className="stickyPin"><ProjectItem /></div>
                    </Scene>
                    <Scene duration={200} pin={{pushFollowers: false}}>
                        <div className="stickyPin"><ProjectItem /></div>
                    </Scene>
                    <Scene duration={300} pin={true} offset={100}>
                        <div className="stickyPin blue">Pin test3</div>
                    </Scene>
                </Controller>
            </div>
        </section>
    );
};

export default Projects