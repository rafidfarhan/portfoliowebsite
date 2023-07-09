import React, { useState } from "react";

import IconButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from "react-router-dom"

import {Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


import { useHistory } from "react-router-dom";

import "./MyNav.css";






const MyNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [navbarscroll,setNavbarscroll] = useState(false);

  const changeSizes = () => {
    if (window.scrollY > 90){
      setNavbarscroll (true);
    }
    else{
      setNavbarscroll(false);
    }
  }

  window.addEventListener('scroll',changeSizes);
  return(
    <>
    <nav className = {navbarscroll ? 'myNav myNavPadding': 'myNav' }>
      <div className = 'logo'>
      <svg className = {navbarscroll ? 'logo-mark-2': 'logo-mark-1'} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><defs>{`<style>.cls-1{fill:#231f20;}</style>`}</defs><circle className="cls-1" cx="529.15" cy="135.72" r="19.68"/><path className="cls-1" d="M296.11,478.14a5.82,5.82,0,0,1-5.83,5.83H233.75a6.86,6.86,0,0,1-6.87-6.88V388.18H41.13A7.22,7.22,0,0,1,33.88,381V324.25a6.91,6.91,0,0,1,6.88-6.88H267.5c15.8,0,28.61,13.12,28.61,29.29Z"/><path className="cls-1" d="M296.11,221.06c0,6.35-5.41,11.49-12.07,11.49H16.83a11.74,11.74,0,0,1-12-11.49V166.89a11.74,11.74,0,0,1,12-11.49H284c6.66,0,12.07,5.14,12.07,11.49Z"/><path className="cls-1" d="M591,484H502.54a24,24,0,0,1-17-7l-82.2-82.19v81.77a7.45,7.45,0,0,1-7.45,7.46h-63a7.69,7.69,0,0,1-7.66-7.72V345.4A28.88,28.88,0,0,1,354,316.59h93.74c23.89,0,42.78-19.32,41.57-43.15-.84-22.62-20.15-39.89-42.35-39.89H333.53a8.32,8.32,0,0,1-8.29-8.34V164.27a8.85,8.85,0,0,1,8.82-8.87H446.54c65.76,0,121.71,53.48,121.29,119.25A118,118,0,0,1,499.18,382L594,476.78A4.23,4.23,0,0,1,591,484Z"/></svg>
      
        {/* <img src ={logoMark} className ='logo-mark'></img> */}
        {/* <h3 className='logo-sig'>Portfolio</h3> */}
      </div>
      <h3 className={navbarscroll ? 'logo-sig-2': 'logo-sig-1' }>Portfolio</h3>
      {/* <IconButton
        className= 'menuBtn'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      ><MenuRoundedIcon fontSize="large"></MenuRoundedIcon></IconButton>


      <Menu
        className ='menu-class'
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
      </Menu> */}


    </nav>
    </>
  )

}
export default MyNav;