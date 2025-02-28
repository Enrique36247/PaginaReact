import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>© 2023 GameFinder. All rights reserved. Privacy and Cookies Policy | Terms of Sale</p>
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