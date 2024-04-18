import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../images/portfolio.svg';
import logo2 from '../images/portfolio.svg';
import '../css/Navbar.css';

function Navbar() {
  const [logo, setLogo] = useState(logo1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setLogo(logo2);
      } else {
        setLogo(logo1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand-md" id="mainNav">
      <div className="container">
        <Link className="navbar-brand js-scroll" to="/">
          <img src={logo} alt="logo" />
        </Link>
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
        <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link js-scroll active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll" to="/about">About</Link>
            </li>
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
