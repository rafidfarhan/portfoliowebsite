import React from 'react';

import './about.css';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <>
    
    <div className ='resume-section' ><a href='http://localhost:3000/resume/1.pdf'>View my resume</a></div>
    
    
    <section className ='about-parent' id ='about'>
        <div className ='about-illustration-div'>
            <div className = 'about-illustration'></div>
        </div>
        <div className = 'about-text-div'>
            <div className ='about-desc'>
            <h1>About me</h1>
                  <p>
                  {/* The world is changing rapidly, and I don’t have enough professional experience to know where I will be in the next 5 years,
                   but what I can certainly tell you is that I am open-minded in terms of accepting new challenges, 
                   learning and adapting to new things and any constructive feedback that comes my way. 
                   I am eager to work in teams to become a better team player and dedicate all my skills and talents to developing
                    high-quality and unique products
                    
                    ...........And hopefully have some fun in the process  */}
                    Welcome to my web development portfolio! I'm Rafid Farhan, a passionate web developer with a
                    relentless pursuit of crafting extraordinary digital experiences. With a deep-rooted love for coding and design,
                    I've dedicated myself to turning visions into captivating, functional websites.
                    <br></br>
                    <br></br>
                    My development skills include expertise of HTML, CSS, JavaScript, and certain frameworks. I revel in the art of
                    transforming ideas into interactive, user-friendly web applications and develop my skills in the process.
                    <br></br>
                    <br></br>
                    But web development is not just about code; it's about understanding the client's unique needs and translating them into
                     a digital reality. I'm a firm believer in the power of collaboration, through which clients remain aware of things in 
                     every step and leave satisfied.
                     <br></br>
                     <br></br>

                    If you're looking for a web developer who's enthusiastic and eager to tackle new challenges,
                     I'd love to connect with you and explore how we can work together to bring your web-based ideas to life.
                     <br></br>
                     <br></br>

                    Thank you for visiting my portfolio,  and I look forward to the opportunity of working with you on your 
                    next digital venture.
                    <br></br>
                     <br></br>
                     <br></br>
                     <span className = 'sig'>- R.Farhan</span>

                      {/* I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design.
                      Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^).
                      I'm committed to creating fluent user experiences while staying fashionable.

                      In building JavaScript applications, I'm equipped with just the right tools,
                      and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale
                      — performance and scalabilty are priorities on my radar. */}
                  </p>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default About