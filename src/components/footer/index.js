import React from 'react'
import {Link} from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-div'>
        {/* <i class="envelope outline icon"></i> */}
        <div className= 'social-media-icons'>
        
        <Link to= {`https://twitter.com/RFarhanKhan1`} style={{display: 'contents'}}><i className="twitter icon"></i></Link>
        <Link to ={`https://www.linkedin.com/in/rafid-farhan-4129161aa/`}  style={{display: 'contents'}}><i className="linkedin icon"></i></Link>
        <Link to ={`https://github.com/rafidfarhan`}  style={{display: 'contents'}}><i className="github icon"></i></Link>
        <Link to ={`https://www.behance.net/rfarhankhan`}  style={{display: 'contents'}}><i className="behance square icon"></i></Link>
        <Link to ={`https://www.instagram.com/r.farhankhan/`}  style={{display: 'contents'}}> <i className="instagram icon"></i></Link>   
            
            
           
        </div>
        
        <div className = 'copyright'>
        
        <p> © Rafid Farhan 2023 </p>
        
        </div>
        
    </div>
  )
}

export default Footer