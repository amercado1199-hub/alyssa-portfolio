import { NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          Alyssa <span>&lt;/&gt;</span>
        </NavLink>

        <div className="navbar-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/projects">
            Projects
          </NavLink>

          <NavLink to="/skills">
            Skills
          </NavLink>

          <NavLink to="/resume">
            Resume
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="navbar-resume"
        >
          <FiDownload />
          <span>Download Resume</span>
        </a>
      </nav>
    </header>
  );
}

export default NavBar;