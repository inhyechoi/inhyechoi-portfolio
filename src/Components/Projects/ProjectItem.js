import React from 'react';
import projects from '../../data.json';
import { Link } from 'react-router-dom';
import './ProjectItem.scss';
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const ProjectItem = () => {
    const SectionProjectStyled = styled.div`
    overflow: hidden;
    #pinContainer {
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }
    #pinContainer .panel {
      height: 100vh;
      width: 100vw;
      position: absolute;
      text-align: center;
    }
    .panel span {
      position: relative;
      display: block;
      top: 50%;
      font-size: 80px;
    }
  
    .panel.blue {
      background-color: #3883d8;
    }
  
    .panel.turqoise {
      background-color: #38ced7;
    }
  
    .panel.green {
      background-color: #22d659;
    }
  
    .panel.bordeaux {
      background-color: #953543;
    }
  `;
  
    return(
        <div className="projectItem">
          <div className="mansonry">
            {projects.map((el)=>{

                return(
                  // <div className="projectItemBg item" key={el.id} 
                  // style={{backgroundImage: `url(${el.picture})`}}>
                    <div className="projectItemBg item">
                    <ul>
                        {/* <Link link={`/projects/${el.title}`}> */}
                          <li><img className="projectItemImg" key={el.id}src={el.picture} /></li>
                          <li>{el.title}</li>
                          {/* <li><a href={`${el.url}`}>view company</a></li> */}
                          {/* <Link to={'/projectsitem'}>view project</Link> */}
                          <li>{el.category}</li>
                        {/* </Link> */}
                    </ul>
                  </div>
                    // <SectionProjectStyled>
                    //     <div>
                    //     <ul>
                    //         <Controller>
                    //         <Scene triggerHook="onLeave" duration="300%" pin>
                    //             <Timeline wrapper={<div id="pinContainer" />}>
                    //             <section className="panel blue" >
                    //                 <span>Panel</span>
                    //                 <li>{el.title}</li>
                    //             </section>
                    //             <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
                    //                 <section className="panel bordeaux">
                    //                     <span>Panel</span>
                    //                     <li><a href={`${el.url}`}>view project</a></li>
                    //                 </section>
                    //             </Tween>
                    //             <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
                    //                 <section className="panel turqoise">
                    //                     <span>Panel</span>
                    //                     <Link to={'/projectsitem'}>view project</Link>
                    //                 </section>
                    //             </Tween>
                    //             <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
                    //                 <section className="panel green">
                    //                     <span>Panel</span>
                    //                     <li>{el.category}</li>
                    //                 </section>
                    //             </Tween>
                    //             </Timeline>
                    //         </Scene>
                    //         </Controller>
                    //         {/* <li>{el.title}</li>
                    //         <li><a href={`${el.url}`}>view project</a></li>
                    //         <Link to={'/projectsitem'}>view project</Link>

                    //         <li>{el.category}</li> */}
                    //     </ul>         
                    // </div>
                    // </SectionProjectStyled>
                );
            })}
          </div>
        </div>
    );
}; 

export default ProjectItem