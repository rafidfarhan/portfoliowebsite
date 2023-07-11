import React from 'react';
import { useLocation } from 'react-router-dom';
import {Carousel} from 'react-carousel-minimal';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketRoundedIcon from '@mui/icons-material/RocketRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import HourglassTopRoundedIcon from '@mui/icons-material/HourglassTopRounded';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import javaLogo from '../../images/Icons/java.svg';
import pythonLogo from '../../images/Icons/python.svg';
import jsLogo from '../../images/Icons/javascript.svg';
import expressLogo from '../../images/Icons/express-js.svg';
import mongoDBLogo from '../../images/Icons/mongodb.svg';
import reactLogo from '../../images/Icons/react.svg';
import htmlLogo from '../../images/Icons/html5.svg';
import cssLogo from '../../images/Icons/css.svg';
import reduxLogo from '../../images/Icons/redux.svg';
import nodejsLogo from '../../images/Icons/nodejs.svg';
import bootstrapLogo from '../../images/Icons/bootstrap.svg';
import materialLogo from '../../images/Icons/material-ui.svg';
import gitLogo from '../../images/Icons/git.svg';
import illustratorLogo from '../../images/Icons/illustrator.svg';
import photoshopLogo from '../../images/Icons/photoshop.svg';
import postmanLogo from '../../images/Icons/postman.png';
import apiLogo from '../../images/Icons/api.png';
import livesiteLogo from '../../images/Icons/rocket.png';
import githubLogo from '../../images/Icons/github.svg';

import {Link} from 'react-router-dom';

import './index.css';

const Project = () => {
  let { state } = useLocation();
  // let data = [
  //   {
  //     image: NW1,
  //     caption: "blah"
  //   },
  //   {
  //     image: NW2,
  //     caption: "blah2"
  //   }
    
  // ];

  let data = state.record.images;

  let parsed =JSON.stringify(state.record);
  parsed = JSON.parse(parsed);
  // console.log(parsed);

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    backgroundColor:'rgba(22, 21, 23, 0.5)'
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <div className = 'proj-div'>
      <div className = 'carousel-wrapper'>
      <Carousel
            data={data}
            time={10000}
            width="1050px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber ={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="#161517"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1050px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
      </div>
      <div className ='proj-text-div'>
        <h2>Project: {state.record.title}</h2>
        <p dangerouslySetInnerHTML={{__html:parsed["desc"]}} >
          {/* {parsed.desc} */}
        </p>
        <h4>Notable things I learnt:</h4>
        <p dangerouslySetInnerHTML={{__html:parsed["learnt"]}} >
        </p>
        <h4>Some things that could have been done better:</h4>
        <p dangerouslySetInnerHTML={{__html:parsed["better"]}} >
        </p>
        <h4>Technologies and Tools used:</h4>
        <div className = 'tech-div'>
        {state.record.technologiesUsed.includes("React JS") ? <div className='techs'><img src ={reactLogo}  ></img><p>React JS</p></div>: <></>}
        {state.record.technologiesUsed.includes("Material-UI") ? <div className='techs'><img src ={materialLogo}  ></img><p>Material-UI</p></div>: <></>}
        {state.record.technologiesUsed.includes("HTML") ? <div className='techs'><img src ={htmlLogo}  ></img><p>HTML</p></div>: <></>}
        {state.record.technologiesUsed.includes("CSS") ? <div className='techs'><img src ={cssLogo}  ></img><p>CSS</p></div>: <></>}
        {state.record.technologiesUsed.includes("Javascript") ? <div className='techs'><img src ={jsLogo}  ></img><p>Javascript</p></div>: <></>}
        {state.record.technologiesUsed.includes("React-Bootstrap") ? <div className='techs'><img src ={bootstrapLogo}  ></img><p>Bootstrap</p></div>: <></>}
        {state.record.technologiesUsed.includes("Node JS") ? <div className='techs'><img src ={nodejsLogo}  ></img><p>Node JS</p></div>: <></>}
        {state.record.technologiesUsed.includes("Express JS") ? <div className='techs'><img src ={expressLogo}  ></img><p>Express JS</p></div>: <></>}
        {state.record.technologiesUsed.includes("MongoDB") ? <div className='techs'><img src ={mongoDBLogo}  ></img><p>MongoDB</p></div>: <></>}
        {state.record.technologiesUsed.includes("Postman") ? <div className='techs'><img src ={postmanLogo}  ></img><p>Postman</p></div>: <></>}
        {state.record.technologiesUsed.includes("React Redux") ? <div className='techs'><img src ={reduxLogo}  ></img><p>React Redux</p></div>: <></>}
        {state.record.technologiesUsed.includes("Java") ? <div className='techs'><img src ={javaLogo}  ></img><p>Java</p></div>: <></>}
        {Object.keys(state.record.API).length===0 ? <></> : <div className='techs'><img src ={apiLogo}  ></img> <Link to = {`${state.record.API.APILink}`}><p>{state.record.API.name}</p></Link></div>}
        
        </div>
        
         
          <h4>Links:</h4>
          <div className = 'tech-div'>
            <Link to= {`${state.record.sourceCode}`} style={{display: 'contents'}}>
            {state.record.sourceCode === "" ? <></> : <div className='techs'><img src ={githubLogo}  ></img><p>View source</p></div>}
            </Link>
            <Link to = {`${state.record.liveLink}`} style={{display: 'contents'}} > 
            {state.record.liveLink === "" ? <></> : <div className='techs'><img src ={livesiteLogo}  ></img><p>Visit site</p></div>}
            </Link>
          
          
          </div>

          <p className='status-p'>
            Status <b></b>: {parsed.status} {parsed.status.charAt(0)=== 'C' ? <CheckCircleRoundedIcon style={{ marginLeft: "5px", color:'#037743'}}></CheckCircleRoundedIcon>:<HourglassTopRoundedIcon style={{ marginLeft: "5px", color:'#c00707'}}></HourglassTopRoundedIcon>}
          </p>
          <span>----- R.Farhan</span>
          
        {/* <div className='button-wrap'>
          <Link to={`${state.record.sourceCode}`} style={{ width: "45%" }}>
            <button className="login-form-button"><GitHubIcon style={{ marginRight: "5px" }}></GitHubIcon> View Sourcecode</button>
          </Link>
          <Link to={`${state.record.liveLink}`} style={{ width: "45%" }}>
            <button className="login-form-button">
              <RocketRoundedIcon></RocketRoundedIcon> Visit site</button>
          </Link>
        </div> */}
        
      </div >
      
    </div>
  )
}

export default Project