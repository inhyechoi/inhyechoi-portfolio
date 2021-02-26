import React from 'react';
import projects from '../../data.json'
import './ProjectItem.scss';
// import images from '../../Assets/Images/Projects/Desktop/'
// import useWindowWidth from '../../Hooks/useWindowWidth.js';


// import desktopImage from '../../Assets/Images/Projects/Desktop/JJEntertainment.jpg';
// import mobileImage from '../../Assets/Images/Projects/Mobile/JJEntertainment_changmo_jedharper_instagram_square.jpg'


const ProjectItem = () => {
// const ProjectItem = ({ viewProject }) => {

    // const { windowWidth } = useWindowWidth();

    // const projectStyle = (src) => ({
    //     backgroundImage: 'url(' + src + ')'
    //   })

    // const { projects } =() => JSON.parse(data)
    
    // const imageUrl ={
    //    backgroundImage: 'url(' + require('./../../Assets/Images/Projects/Desktop' + el.picture) + ')'
    // }

    return(
        <div className="projectItem">
            {projects.map((el)=>{
                return(
                <div className="projectItemBg" key={el.id} 
                style={{backgroundImage: `url(${el.picture})`, width: 300, height: 300, backgroundSize: 'cover', display: `block`}}>
                {/* // `url(${el.picture[i]})`, width: 300, height: 300}}>        */}
                {/* <img alt="" width="250" height="300"src={images[el.picture]} key={el.id} /> */}
                {/* <div key={el.id} style={images[el.picture]} style={{width: 300, height: 300}}>        */}
                    <ul>
                    {/* <img className="projectBgImg" src={require("../../Assets/Images/Projects/Desktop/Portfolio_A4.png").default} alt="" /> */}
                        <li>{el.title}</li>
                        {/* <li>{el.url}</li> */}
                        <li>{el.category}</li>
                    </ul>
                </div>
                );
            })}
            {/* <div style={{ backgroundImage: `url(${ imageUrl })`}}>
            {windowWidth >= 650 &&( 
                <>
       
                    {projects.map((el) => {
                    return (
                    <ul key={el.title}>
                        <div className="projectItem" style={{ backgroundImage: `url(${el.backgroundImage})`}}></div>
                        <li>{el.title}</li>
                        <li>{el.url}</li>
                        <li>{el.category}</li> 
                    </ul>
                    );
                })} 
                // <div className="viewProject">{viewProject}</div>
                </>
                
            )}
            </div> */}

        </div>
    );
}; 

export default ProjectItem