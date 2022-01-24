import React from 'react';

const MobileNav = () => {
  return (
    <div>
      <div class="topnav">
        <a href="#home" class="active">Logo</a>
        {/* Menu links (hidden by default) */}
        <div id="myLinks">
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        {/* Hamburger menu icon */}
        <a href="#" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  )
};

export default MobileNav;
