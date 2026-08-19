import { Link } from "react-router-dom";
import {
  FaLightbulb,
  FaCode,
  FaBookOpen,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import profile from "../assets/profile.jpg";
import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <main className="about-page">

      {/* PAGE INTRO */}
      <section className="about-page-hero">
        <div className="about-page-container about-hero-grid">

          <div className="about-page-photo">
            <div className="about-photo-glow"></div>

            <img
              src={profile}
              alt="Alyssa Mercado"
            />
          </div>

          <div className="about-page-intro">
            <p className="section-label">ABOUT ME</p>

            <h1>
              Building solutions with
              <span> code and creativity.</span>
            </h1>

            <div className="about-page-line"></div>

            <p>
              I'm a software engineer who enjoys transforming ideas into
              clean, functional, and user-focused applications.
            </p>

            <p>
              My background has taught me that great software isn't only
              about writing code. It's about understanding problems,
              communicating clearly, and creating solutions that make
              people's lives easier.
            </p>

            <Link to="/projects" className="about-project-btn">
              View My Projects
              <FiArrowRight />
            </Link>
          </div>

        </div>
      </section>


      {/* MY STORY */}
      <section className="about-story">
        <div className="about-page-container">

          <div className="about-story-heading">
            <p className="section-label">MY STORY</p>
            <h2>How I Got Into Software Engineering</h2>
          </div>

          <div className="about-story-content">

            <p>
              My path into software engineering grew from my interest in
              technology, problem-solving, and creating things that people
              can actually use.
            </p>

            <p>
              I studied full-stack software engineering at Flatiron School,
              where I built applications using technologies including React,
              JavaScript, Python, Flask, SQLAlchemy, and relational databases.
            </p>

            <p>
              Since then, I've continued building full-stack projects that
              challenge me to think about architecture, user experience,
              APIs, authentication, databases, deployment, and responsive
              design.
            </p>

          </div>
        </div>
      </section>


      {/* STRENGTHS */}
      <section className="about-strengths">
        <div className="about-page-container">

          <div className="about-story-heading">
            <p className="section-label">WHAT I BRING</p>
            <h2>More Than Just Code</h2>
          </div>

          <div className="about-strength-grid">

            <StrengthCard
              icon={<FaLightbulb />}
              title="Problem Solver"
              text="I enjoy breaking complex problems into smaller pieces and finding practical solutions."
            />

            <StrengthCard
              icon={<FaCode />}
              title="Full-Stack Developer"
              text="I enjoy working across the frontend and backend to understand how complete applications work."
            />

            <StrengthCard
              icon={<FaBookOpen />}
              title="Lifelong Learner"
              text="Technology constantly evolves, and I'm always expanding my skills and exploring new tools."
            />

            <StrengthCard
              icon={<FaUsers />}
              title="Team Player"
              text="I value communication, collaboration, feedback, and working toward a shared goal."
            />

          </div>
        </div>
      </section>


      {/* EDUCATION */}
      <section className="about-education">
        <div className="about-page-container">

          <div className="about-story-heading">
            <p className="section-label">EDUCATION</p>
            <h2>My Foundation</h2>
          </div>

          <div className="education-card">

            <div className="education-icon">
              <FaGraduationCap />
            </div>

            <div>
              <p className="education-year">
                Software Engineering
              </p>

              <h3>Flatiron School</h3>

              <p>
                Full-stack software engineering program focused on
                JavaScript, React, Python, Flask, databases, APIs,
                authentication, Git, and modern development practices.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="about-cta">
        <div className="about-page-container">
          <div className="about-cta-card">

            <p className="section-label">
              LET'S BUILD SOMETHING
            </p>

            <h2>
              Want to see what I've been working on?
            </h2>

            <p>
              Take a look at some of the applications and products
              I've built.
            </p>

            <Link to="/projects" className="about-project-btn">
              Explore My Projects
              <FiArrowRight />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}


function StrengthCard({ icon, title, text }) {
  return (
    <article className="about-strength-card">
      <div className="about-strength-icon">
        {icon}
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default AboutPage;