import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function NavBar(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const handleClick = (event) => {
    setIsNavExpanded(!isNavExpanded);
  }

  return (
    <nav className="navigation">
      <div className="logo">
        <Link to="/">
          <img src="/logo.svg" alt="Shop Local Hawaii Logo" />
        </Link>
      </div>
      <div className={`hamburger ${isNavExpanded ? 'active' : ''}`} onClick={handleClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      {/* className="aLink" */}
      <ul className={isNavExpanded ? "nav-links open" : "nav-links"}>
        <li><Link to="/"><span className="aLink" onClick={handleClick}>HOME</span></Link></li>
        <li><Link to="/dinings"><span className="aLink" onClick={handleClick}>DINING</span></Link></li>
        <li><Link to="/hotels"><span className="aLink" onClick={handleClick}>HOTELS</span></Link></li>
        <li><Link to="/activities"><span className="aLink" onClick={handleClick}>ACTIVITIES</span></Link></li>
        <li><Link to="/about"><span className="aLink" onClick={handleClick}>ABOUT</span></Link></li>
        <li>
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </li>
        <li>
          <Link to="/form">
            <button className="join-button">Join</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}