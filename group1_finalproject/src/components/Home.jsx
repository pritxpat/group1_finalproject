import React from 'react';
import { ReactTyped } from 'react-typed'; // Importing ReactTyped for typing effect
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation
import '../css/Home.css'; // Importing CSS file for Home component

function Home() {
  return (
    // Home container
    <div className="home-container">
      {/* Background image */}
      <div className="bg-image" />
      {/* Jumbotron */}
      <div className="jumbotron">
        <div className="intro-content">
          <div className="container">
            {/* Title */}
            <h1 className="intro-title mb-4">Welcome to My Portfolio</h1>
            {/* Subtitle with typing effect */}
            <p className="intro-subtitle">
              {/* Container for name */}
              <div className="name-container">
                {/* Name */}
                <p className="name">Pritesh Patel</p>
              </div>
              {/* Typing effect */}
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <ReactTyped
                  strings={[
                    "Computer Engineer",
                    "SEO Executive",
                    "Front End Developer"
                  ]}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </p>
            {/* Additional information link */}
            <div className="additional-info">
              <Link to="/about" className="btn btn-primary">For More Info :) </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
