import {
  FaLightbulb,
  FaCode,
  FaBookOpen,
  FaUsers
} from "react-icons/fa";

import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building solutions with code and creativity.
          </h2>

          <div className="about-line"></div>

          <p>
            I’m a software engineer focused on building clean,
            responsive, and user-friendly applications.
          </p>

          <p>
            I studied full-stack software engineering at Flatiron School,
            where I strengthened my skills in React, JavaScript, Python,
            Flask, databases, and modern development workflows.
          </p>

          <p>
            I enjoy turning ideas into real products, solving technical
            problems, and continuously learning new tools and technologies.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <FaLightbulb />
            <h3>Problem Solver</h3>
            <p>
              I enjoy breaking down complex problems and finding clean,
              practical solutions.
            </p>
          </div>

          <div className="about-card">
            <FaCode />
            <h3>Full-Stack Developer</h3>
            <p>
              I build across both frontend and backend technologies to
              create complete applications.
            </p>
          </div>

          <div className="about-card">
            <FaBookOpen />
            <h3>Lifelong Learner</h3>
            <p>
              I’m always learning new technologies and improving the way
              I build software.
            </p>
          </div>

          <div className="about-card">
            <FaUsers />
            <h3>Team Player</h3>
            <p>
              I bring strong communication, collaboration, and attention
              to detail to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;