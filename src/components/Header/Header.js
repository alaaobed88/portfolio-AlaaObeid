import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          Alaa
        </a>
        <div className={showMenu ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link active-link">
                <i className="uil uil-estate nav-icon"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="uil uil-user nav-icon"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="uil uil-file-alt nav-icon"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                <i className="uil uil-briefcase-alt nav-icon"></i> Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <i className="uil uil-scenery nav-icon"></i> Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="uil uil-message nav-icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav-close"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>
        <div className="nav-toggle">
          <i
            className="uil uil-apps"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
