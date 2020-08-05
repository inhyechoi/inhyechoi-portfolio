import React from 'react';
// import { projects } from './data.json';

const LoginBox = () => {
    // const projectsCategory = props.projects.category((project, i) => {
    //     return (
    //       <li key={i}>
    //         <a className="link" href>
    //           {projects.category}
    //         </a>
    //       </li>
    //     );
    //   });
    return (
        <div className="loginBox">
            <button className="toggle-password hover-target">
                Forgot password?
            </button>
            <button className="hover-target">
                Log-in
            </button>
        </div>

    );
};
export default LoginBox;
