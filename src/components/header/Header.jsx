import React, { useState } from 'react';
import logo from "../../img/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Logo" />
          <h1>GameFinder</h1>
        </div>
        <nav>
          <ul>
            <li>
              <button onClick={toggleMenu} className="menu-button">Sports</button>
              {menuOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/futbol">Soccer</Link></li>
                  <li><Link to="/basket">Basketball</Link></li>
                  <li><Link to="/voley">Volleyball</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;