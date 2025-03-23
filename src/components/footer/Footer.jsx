import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>© 2023 GameFinder. All rights reserved. <Link to="/terms"> Terms and Conditions</Link></p>
      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon">
          <FaGithub className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
          <FaInstagram className="icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
          <FaFacebook className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;