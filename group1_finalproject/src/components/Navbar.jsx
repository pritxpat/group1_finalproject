import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation
import logo1 from '../images/portfolio.svg'; // Importing logo images
import logo2 from '../images/portfolio.svg';
import '../css/Navbar.css'; // Importing CSS file for Navbar component

function Navbar() {
  // State to manage logo change on scroll
  const [logo, setLogo] = useState(logo1);

  // useEffect hook to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        // Change logo when scrolled
        setLogo(logo2);
      } else {
        setLogo(logo1);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    // Navbar
    <nav className="navbar navbar-b navbar-trans navbar-expand-md" id="mainNav">
      <div className="container">
        {/* Link to home page */}
        <Link className="navbar-brand js-scroll" to="/">
          {/* Logo */}
          <img src={logo} alt="logo" />
        </Link>
        {/* Navbar toggler for mobile view */}
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* Navbar collapse section */}
        <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
          {/* Navbar links */}
          <ul className="navbar-nav">
            {/* Home link */}
            <li className="nav-item">
              <Link className="nav-link js-scroll active" to="/">Home</Link>
            </li>
            {/* About link */}
            <li className="nav-item">
              <Link className="nav-link js-scroll" to="/about">About</Link>
            </li>
            {/* Contact link */}
            <li className="nav-item">
              <Link className="nav-link js-scroll" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
