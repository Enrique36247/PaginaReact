import logo from "../../img/logo.png";
import "./Header.css";

function Header() {
  
    return (
      <header>
        <img src={logo} />
        <h1>GameFinder</h1>
      </header>
    );
  }

  export default Header;