import React from "react";
import { Routes,Route, BrowserRouter} from 'react-router-dom';
import {useState} from 'react';
import {HashLink} from 'react-router-hash-link';
import {Link as ScrollLink} from 'react-scroll'  ;
import ScrollToTop from './components/ScrollToTop'


import MyNav from "./components/navigation";
import Banner from "./components/banner";
import ProjectsSection from "./components/projects";
import Project from "./components/project";
import About from "./components/about";
import Contact from './components/contact';
import Footer from './components/footer';

import './App.css';

const App = () => {
  // const dots = document.querySelectorAll('.scroll-indicator a');

  // const removeActiveClass = () =>{
  //   dots.forEach((dot)=>{
  //     dot.classList.remove('active');
  //   })
  // }
  // const addActiveClass = (entries, observer) =>{
  //   entries.forEach((entry)=>{
  //     if (entry.isIntersecting ){
  //       console.log(entry.target.id);
  //       let currentDot = document.querySelector(`.scroll-indicator a[href='/#${entry.target.id}']`)
  //       removeActiveClass();
  //       currentDot.classList.add("active");
  //     }
  //   })
  // };

  // let options = {
  // };

  // const observer = new IntersectionObserver(addActiveClass, options);

  // const sections = document.querySelectorAll('#intro,#about,#projects,#contact');

  // sections.forEach((section) =>{
  //   observer.observe(section);
  // })

  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <MyNav></MyNav>
    
    <Routes>
      
            <Route path ='/' exact element ={
              <>
              <div className = 'Nav-Banner'>
                <div className='scroll-indicator'>
                  <ScrollLink activeClass= 'active' to="intro" spy={true} smooth={true} offset={-100} duration={500} ></ScrollLink>
                  <ScrollLink activeClass= 'active' to="about" spy={true} smooth={true} offset={-100} duration={500} ></ScrollLink>
                  <ScrollLink activeClass= 'active' to="projects" spy={true} smooth={true} offset={-100} duration={500} ></ScrollLink>
                  <ScrollLink activeClass= 'active' to="contact" spy={true} smooth={true} offset={-100} duration={500} ></ScrollLink>

                </div>
                <Banner></Banner>
                <About ></About>
                <ProjectsSection ></ProjectsSection>
                <Contact ></Contact>
                </div>
              </>}>

            </Route>
            <Route path ='/project/:projectId' exact element ={<Project></Project>}>
            </Route>
            
    </Routes>
    <Footer></Footer>
    {/* <Banner ></Banner>
    <About ></About>
    <ProjectsSection ></ProjectsSection>
    <Contact ></Contact> */}
    
    
    </BrowserRouter>
    
    </>
    

    
  );
}

export default App;
