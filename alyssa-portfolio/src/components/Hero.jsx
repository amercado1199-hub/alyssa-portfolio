import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import profile from "../assets/profile.jpg";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hi, I’m</p>

        <h1 className="hero-name">Alyssa Mercado</h1>

        <h2 className="hero-title">
          Software Engineer <span className="hero-cursor">|</span>
        </h2>

        <p className="hero-description">
          I build full-stack web applications that are thoughtful,
          scalable, and user-focused.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="primary-btn">
            View My Projects
            <FiArrowRight />
          </Link>

        </div>
      </div>

      <div className="hero-image-section">
        <div className="hero-glow"></div>
        <div className="hero-ring"></div>

        <img
          src={profile}
          alt="Alyssa Mercado"
          className="hero-profile"
        />
      </div>
    </section>
  );
}

export default Hero;

