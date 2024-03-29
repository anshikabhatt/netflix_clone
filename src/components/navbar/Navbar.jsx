import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./navbar.scss";

import React, { useState } from 'react'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
    <div className="container">
    <div className="left">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt=""
      />
      <span>Homepage</span>
      <span>Series</span>
      <span>Movies</span>
      <span>New and Popular</span>
      <span>My List</span>
    </div>
    <div className="right">
      <Search className="icon" />
      <span>KID</span>
      <Notifications className="icon" />
      <img
            src="https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/aesthetic-pictures-city-landscape.jpg"
            alt=""
          />
      <div className="profile">
        <ArrowDropDown className="icon" />
        <div className="options">
          <span>Settings</span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  </div>
  </div>
);
};

export default Navbar;