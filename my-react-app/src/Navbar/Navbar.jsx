import React from "react";
import image1 from  '../assets/image1.png'
import image2 from '../assets/image2.png'
import image10 from '../assets/image10.png'
import './Navbar.css'

function Navbar() {
  return (
        <nav className="navbar">
          <div className="images1">
            <img src={image2} alt="" />
          </div>
          <div className="navbar-list">
            <div className="profile">
            <p className="navbar-items">Free Trial | 2 days Left</p>
            <p className="colored">Extend Free Trail</p>
            </div>
            <div className="profile-photo">
            <img src={image1} alt="logo" />
            <img src={image10} alt="" className="dropdown" />
            </div>
          </div>
        </nav>
   
    
  );
}

export default Navbar;
