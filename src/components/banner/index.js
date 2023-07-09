import React from 'react';

import './banner.css'
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
import gitLogo from '../../images/Icons/git.svg';
import illustratorLogo from '../../images/Icons/illustrator.svg';
import photoshopLogo from '../../images/Icons/photoshop.svg';
import postmanLogo from '../../images/Icons/postman.png';


const Banner =() => {
  return (
    <section className="banner-div" id ='intro'>
      <div className='banner-div-2'>
        <span className = 'illustration-animation'></span> 
        <div className = 'text-section'>
        <div className = 'text-1'>
          <span>Hello ! My name is</span>
        </div>
        <div className = 'text-2'>
          
          <h1> Rafid Farhan.</h1>
        </div>
        <div className = 'text-3'>
          <p>I’m a software engineer specializing in building (and occasionally designing)
             exceptional digital experiences. Currently, I’m focused 
             on building accessible, human-centered products at Upstatement.</p>
        </div>
        <div className = 'text-4'>
          <p>Some technologies that I have worked with:</p>
          <div className ='text-4-icons'>
          {/* <i className="react icon"></i>
          <i className="html5 icon"></i>
          <i className="css3 alternate icon"></i>
          <i className="node icon"></i>
          <i className="js icon"></i>
          <i className="python icon"></i>
          <i className="github icon"></i> */}
          <img src ={htmlLogo}  ></img>
          <img src ={cssLogo}  ></img>
          <img src ={jsLogo} ></img>
          <img src ={bootstrapLogo}  ></img>
          <img src ={reactLogo} className= 'react-logo' ></img>
          <img src ={reduxLogo} ></img>
          <img src ={nodejsLogo} ></img>
          <img src ={expressLogo} ></img>
          <img src ={mongoDBLogo} ></img>
          <img src ={javaLogo} ></img>
          <img src ={pythonLogo} className ='python-logo'></img>
          
          
          <img src ={gitLogo} ></img>
          <img src ={postmanLogo} ></img>
          <img src ={illustratorLogo} ></img>
          <img src ={photoshopLogo} ></img>
          
          </div>
         
          
        </div>
       
      </div>

      </div>
      

       
      

      <div className = 'photo-section'>
        <div className='photo-div'>

        </div> 
        <div className='misplaced-frame'>

        </div> 
        <svg className = 'pattern-svg-2' height="100%" width="100%">
        <defs>
          <pattern id="doodad" width="20" height="20" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
            <rect width="100%" height="100%" fill="rgba(22, 21, 23,1)" />
            <circle cx="20" cy="20" r="2" fill="#1a202c" />
            <circle cx="40" cy="20" r="2" fill="rgba(255, 251, 245,1)" />
            <circle cx="0" cy="20" r="2" fill="rgba(255, 251, 245,1)" />
          </pattern>
        </defs>
        <rect fill="url(#doodad)" height="200%" width="200%" />
      </svg>
      </div> 

     


      

    </section>
  )
}

export default Banner