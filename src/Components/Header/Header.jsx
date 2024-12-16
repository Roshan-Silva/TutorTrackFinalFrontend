import React from 'react';
import './Header.css';
import header_image from '../../Assets/Header Images/header.jpg'
import next_icon from '../../Assets/Icons/next.png'

const Header = () => {
  return (
    <div className='header'>
    <div className="header-left">
      <h1>Tutor<span>Track</span></h1>
      <p>WE THINK KNOWLEDGE IS EVERYTHING!</p>
      {/* <div className="visit-us-button">
        Visit Us<img src={next_icon} alt="" />
      </div> */}
    </div>
    <div className="header-right">
      <img src={header_image} alt="Educational Header" />
    </div>
  </div>
  );
};

export default Header;


