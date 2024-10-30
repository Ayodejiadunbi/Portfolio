import React from "react";
import {Link ,Outlet } from "react-router-dom";


const Navbar = ()=>{
    return(


        <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{gap:"3rem"}}>
       
        <li className="nav-item">
          <a className="nav-Link" href="#">Home</a>
        </li>

        <li className="nav-item">
          <a  className="nav-Link" href="#aboutme">About me</a>
        </li>
        
        <li className="nav-item">
          <a  className="nav-Link" href="#RESUME">Resume</a>
        </li>
        <li className="nav-item">
          <a  className="nav-Link" href="#PORTFOLIO">Portfolio</a>
        </li>

        <li className="nav-item">
          <a  className="nav-Link" href="#service">Service I Render</a>
        </li>
        
       </ul>
    </div>
  </div>
</nav>  


        
        <Outlet/>
        </>
    )
};

export default Navbar;