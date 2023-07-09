import React from 'react';
import {Link} from 'react-router-dom';

import './projects.css';

// import Project1Image1 from '../../images/ProjectImages/NightsWatch/NW1.jpg'

import Records from "../../data/records.json"

import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  return (
    <>
    {/* <div className ='stacks'></div> */}
      <section className="projects-div" id ='projects'>
        
      <h1>Projects</h1>

      {Records?.map((record)=>(
        <div key = {record.id} className='project-card'>
        <Link to= {`/project/${record.id}`} state ={{record}}>
          
       

        <div className='proj-img-section'>

          <div className='img-overlay'>
            <div className='proj-heading_div'>
              <h1>Project {record.id}: {record.title}</h1>
            </div>

          </div>
          <div className='img-div'>
            <img src= {`${record.images[0].image}`} className='project-image'></img>
          </div>

        </div>
        </Link>
      </div>
      
      ))}


        {/* <div className='project-card'>

          <div className='proj-img-section'>

            <div className='img-overlay'>
              <div className='proj-heading_div'>
                <h1>Project: SongBird API</h1>
              </div>

            </div>
            <div className='img-div'>
              <img src={Project1Image1} className='project-image'></img>
            </div>

          </div>
          

        </div> */}

        {/* <div className='project-card'>

          <div className='proj-img-section'>

            <div className='img-overlay'>
              <div className='proj-heading_div'>
                <h1>Project: SongBird API</h1>
              </div>

            </div>
            <div className='img-div'>
              <img src={Project1Image1} className='project-image'></img>
            </div>

          </div>
          <div className='proj-details-section'>
            <p> <i class="node js icon"></i>Node js, Express JS</p>
            <p><OpenInNewRoundedIcon></OpenInNewRoundedIcon> Link: www.blah.com <GitHubIcon></GitHubIcon></p>

          </div>

        </div> */}






      </section>
    </>
    
  )
}

export default Projects