import React, { useRef} from 'react';
import ProjectItem from './ProjectItem.js';
// import * as Scrollmagic from 'scrollmagic';
// import { Controller, Scene } from "react-scrollmagic";

import './Projects.scss';

const Projects = () => {
    // const ref = useRef();

    // const [scrollMagic] = useState({
    //     controller: new ScrollMagic.Controller(),
    //     timelineOne: gsap.timeline()
    //   });
    //   const { controller, timelineOne } = scrollMagic;
    //   useEffect(() => {
    //     timelineOne.to("#animation", { x: "-100vw" });
    //     new ScrollMagic.Scene({
    //       triggerElement: "#test-trigger",
    //       duration: 400
    //     })
    //       .setTween(timelineOne)
    //       .addTo(controller);
    //   }, []);

    return(
        <section className="projectsWrapper">
            <div className="projectContainer">   
                <h1 className="titlePage">Projects</h1>  
                <ProjectItem />
                {/* <Controller>
                    <Scene duration="200%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }} ref={ref} progress={progress}>
                        <ProjectItem ref={ref} progress={progress}/>
                        </div>
                    )}
                    </Scene>
                </Controller> */}
            </div>
        </section>
    );
};

export default Projects