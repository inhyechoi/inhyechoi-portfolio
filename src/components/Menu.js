import React from "react";
import ProjectsMenu from "./ProjectsMenu";

const Menu = (props) => {
    // const projectLists = props.projects.map((project, i) => {
    //     return (
    //       <li key={i}>
    //         <a className="link" href>
    //           {project.title}
    //         </a>
    //       </li>
    //     );
    //   });
    return (
        <div className="mainmenu">
            <ul>
                {/* {projectLists} */}
            <li>
                <ProjectsMenu />
            </li>
            </ul>
        </div>
    );
};
export default Menu
