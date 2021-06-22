import React from 'react';
import images from '../../data.json';
import './ProjectItem.scss';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../../Pages/NotFoundPage';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


// import 'bootstrap/dist/css/bootstrap.css';

const ProjectItem = () => {
  
  const params = useParams();
  // console.log(params.projectId);

  //select items from JSON image that have title equal to projectId
  const projectImages = images
  .filter((image) => 
    image.title === params.projectId
  )

  const items = images.filter((image) => image.title === params.projectId);
  if (images.length === 0){
    return (<div>No such project</div>);
  }
  //  // Find all JSON records with matching title
  const projects = images
  .filter((image) => image.title === params.projectId);
  //  // Abort/report error if no match
  if (projects.length === 0){
    return (<div>No such project</div>);
  } else {
    }

  //  // Otherwise, assume just one match, and get its images.
  //  // Now can use projectImages[0], projectImages[1],
  //  // or loop over them with projectImages.map(...)

    // const mainImageComponent = images
    // .map((image)=>{
    //   // console.log(image.pictures)
    //   return(
    //     <div key={image.id} >
    //       <img width="50" height="50" className="projectItemImg" src={'/' + image.pictures[1]} onError={e => e.target.style.display = 'none'}/>
    //     </div>
    //   )
    // });

  return(
    <div className="container-m">
      <div className="container-l">
        <div className="projectItem">
          <p className="projectTitle">project - {params.projectId}</p>
          {items
          .map((item)=>{
            return(
              <div className="singleProjectBox" key={item.id} >
                <a className="singleProjectLink" href={item.url}>Visit Site</a>
                <img width="50" height="50" className="singleProjectImg" src={'/' + item.pictures[1]} onError={e => e.target.style.display = 'none'}/>
                <p className="singleProjectTxt">{item.description[0]}</p>
              </div>
            )
          })}
        {/* { 
        images.length > 2 ? 
        mainImageComponent : 
        <NotFoundPage />
        } */}
        {
        projects.map((el)=>{
          return(
            <div className="projectBox" key={el.id} >
              <p className="projectSubtitle">{el.heading[0]}</p>
              <p className="projectTxt">{el.description[1]}</p>
              <div className="gallery" >
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[2]} onError={e => e.target.style.display = 'none'}/> 
                </figure>
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[3]} onError={e => e.target.style.display = 'none'}/>
                </figure>
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[4]} onError={e => e.target.style.display = 'none'}/>
                </figure>
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[5]} onError={e => e.target.style.display = 'none'}/>
                </figure>
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[6]} onError={e => e.target.style.display = 'none'}/>
                </figure>
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[7]} onError={e => e.target.style.display = 'none'}/>
                </figure>
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[8]} onError={e => e.target.style.display = 'none'}/>
                </figure>
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[9]} onError={e => e.target.style.display = 'none'}/>
                </figure>
              </div>
            </div>
          );
        })}
        {
        projects.map((el)=>{
          return(
            <div className="projectBox">
              <p className="projectSubtitle">Summary of project process</p>
              <div className="carouselItems" key={el.id} >
                <CarouselProvider
                  naturalSlideWidth={400}
                  naturalSlideHeight={325}
                  totalSlides={5}
                >
                  <Slider>
                    <Slide index={0}>
                      <figure>
                        <img className="carouselItemImgs" src={'/' + el.pictures[26]} onError={e => e.target.style.display = 'none'}/>
                      </figure>
                    </Slide>
                    <Slide index={1}>
                  <figure>
                    <img className="carouselItemImgs" src={'/' + el.pictures[27]} onError={e => e.target.style.display = 'none'}/>
                  </figure>
                    </Slide>
                    <Slide index={2}>
                  <figure>
                    <img className="carouselItemImgs" src={'/' + el.pictures[28]} onError={e => e.target.style.display = 'none'}/>
                  </figure>
                    </Slide>
                    <Slide index={3}>
                  <figure>
                    <img className="carouselItemImgs" src={'/' + el.pictures[29]} onError={e => e.target.style.display = 'none'}/>
                  </figure>
                    </Slide>
                    <Slide index={4}>
                  <figure>
                    <img className="carouselItemImgs" src={'/' + el.pictures[30]} onError={e => e.target.style.display = 'none'}/>
                  </figure>
                  </Slide>
                  </Slider>
                  <div className="carouselBtnBox">
                    <ButtonBack className="carouselBtn"><FontAwesomeIcon class="fa fa-a-left" icon={faAngleLeft}/></ButtonBack>
                    <ButtonNext className="carouselBtn"><FontAwesomeIcon class="fa fa-a-right" icon={faAngleRight}/></ButtonNext>
                  </div>
                </CarouselProvider>
              </div>
              <div className="projectTxtBox">
              <p className="projectTxt">{el.description[2]}</p>
              <p className="projectTxt">{el.description[3]}</p>
              <p className="projectTxt">{el.description[4]}</p>
              <p className="projectTxt">{el.description[5]}</p>
              <p className="projectTxt">{el.description[6]}</p>
              <p className="projectTxt">{el.description[7]}</p>
              <p className="projectTxt">{el.description[8]}</p>
              </div>
            </div>
          );
        })}
        <p className="projectSubtitle"></p>
        {projects.map((el)=>{
          return(
            <div key={el.id} >
              <p className="projectSubtitle">{el.heading[1]}</p>
              <div className="gallery">
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[10]} onError={e => e.target.style.display = 'none'}/> 
                </figure>
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[11]} onError={e => e.target.style.display = 'none'}/>
                </figure>
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[12]} onError={e => e.target.style.display = 'none'}/>
                </figure>
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[13]} onError={e => e.target.style.display = 'none'}/>
                </figure>
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[14]} onError={e => e.target.style.display = 'none'}/>
                </figure>
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[15]} onError={e => e.target.style.display = 'none'}/>
                </figure>
                <figure>
                  <img className="projectItemsImg-s" src={'/' + el.pictures[16]} onError={e => e.target.style.display = 'none'}/>
                </figure>
                <figure>
                  <img className="projectItemsImg" src={'/' + el.pictures[17]} onError={e => e.target.style.display = 'none'}/> 
                </figure>
                <figure>
                  <img className="projectItemsImg" src={'/' + el.pictures[18]} onError={e => e.target.style.display = 'none'}/>
                </figure>
              </div>
            </div>
          );
        })}
        {projects.map((el)=>{
          return(
            <div className="gallery-s" key={el.id} >
              <figure>
                <img className="projectItemsImg-s" src={'/' + el.pictures[19]} onError={e => e.target.style.display = 'none'}/>
              </figure>
              <figure>
                <img className="projectItemsImg-s" src={'/' + el.pictures[20]} onError={e => e.target.style.display = 'none'}/>
              </figure>
              <figure>
                <img className="projectItemsImg-s" src={'/' + el.pictures[21]} onError={e => e.target.style.display = 'none'}/>
              </figure>
              <figure>
                <img className="projectItemsImg-s" src={'/' + el.pictures[22]} onError={e => e.target.style.display = 'none'}/>
              </figure>
              <figure>
                <img className="projectItemsImg-s" src={'/' + el.pictures[23]} onError={e => e.target.style.display = 'none'}/>
              </figure>
              <figure>
                <img className="projectItemsImg-s" src={'/' + el.pictures[24]} onError={e => e.target.style.display = 'none'}/> 
              </figure>
              <figure>
                <img className="projectItemsImg-s" src={'/' + el.pictures[25]} onError={e => e.target.style.display = 'none'}/>
              </figure>
            </div>
          );
        })}
        </div>
    </div>
  </div>
  )
};

export default ProjectItem