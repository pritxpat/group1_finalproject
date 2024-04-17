import React from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="bg-image" />
      <div className="jumbotron">
        <div className="intro-content">
          <div className="container">
            <h1 className="intro-title mb-4">Welcome to My Portfolio</h1>
            <p className="intro-subtitle">
            <div className="name-container">
              <p className="name">Pritesh Patel</p>
            </div>
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
