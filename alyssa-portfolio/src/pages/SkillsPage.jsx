import {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaTools,
  FaCloud,
} from "react-icons/fa";

import "../styles/SkillsPage.css";

const skillGroups = [
  {
    title: "Languages",
    icon: <FaCode />,
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: ["React", "Vite", "HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    skills: ["Flask", "FastAPI", "Node.js", "NestJS", "REST APIs"],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    skills: ["PostgreSQL", "SQLite", "SQLAlchemy", "Prisma"],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: ["Git", "GitHub", "Postman", "Docker"],
  },
  {
    title: "Deployment",
    icon: <FaCloud />,
    skills: ["Vercel", "Render", "Environment Variables", "CI/CD Basics"],
  },
];

function SkillsPage() {
  return (
    <main className="skills-page">
      <section className="skills-page-hero">
        <div className="skills-page-container">
          <p className="section-label">MY TOOLKIT</p>

          <h1>
            Technologies I <span>Work With.</span>
          </h1>

          <p className="skills-page-intro">
            The languages, frameworks, databases, and development tools I use
            to build modern full-stack applications.
          </p>
        </div>
      </section>

      <section className="skills-page-main">
        <div className="skills-page-container">
          <div className="skills-page-grid">
            {skillGroups.map((group) => (
              <article className="skills-page-card" key={group.title}>
                <div className="skills-page-icon">{group.icon}</div>

                <h2>{group.title}</h2>

                <div className="skills-page-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-usage">
        <div className="skills-page-container">
          <div className="skills-usage-heading">
            <p className="section-label">HOW I USE THEM</p>
            <h2>Building Complete Applications</h2>
          </div>

          <div className="skills-usage-grid">
            <article>
              <span>01</span>
              <h3>Frontend Development</h3>
              <p>
                I build responsive interfaces with React, JavaScript, HTML,
                CSS, and component-based architecture.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Backend APIs</h3>
              <p>
                I create backend services and REST APIs with Python, Flask,
                FastAPI, and Node-based technologies.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Data & Persistence</h3>
              <p>
                I work with relational databases, models, authentication, and
                application data using SQL and ORM tools.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Deployment</h3>
              <p>
                I use Git and GitHub for version control and deploy projects
                with platforms such as Vercel and Render.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="skills-page-cta">
        <div className="skills-page-container">
          <div className="skills-page-cta-card">
            <p className="section-label">ALWAYS LEARNING</p>

            <h2>My toolkit keeps growing.</h2>

            <p>
              I’m continuously improving my existing skills and exploring new
              technologies as I build more ambitious projects.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SkillsPage;