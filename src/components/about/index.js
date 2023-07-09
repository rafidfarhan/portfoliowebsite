import React from 'react'

import './about.css'

const About = () => {
  return (
    <>
    <div className ='resume-section' >View my resume</div>
    <section className ='about-parent' id ='about'>
        <div className ='about-illustration-div'>
            <div className = 'about-illustration'></div>
        </div>
        <div className = 'about-text-div'>
            <div className ='about-desc'>
            <h1>About me</h1>
                  <p>
                      I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design.
                      Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^).
                      I'm committed to creating fluent user experiences while staying fashionable.

                      In building JavaScript applications, I'm equipped with just the right tools,
                      and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale
                      — performance and scalabilty are priorities on my radar.
                  </p>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default About