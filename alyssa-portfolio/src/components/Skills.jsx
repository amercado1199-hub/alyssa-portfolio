import {
  FaReact,
  FaDatabase,
  FaTools,
  FaCode,
  FaServer,
} from "react-icons/fa";

import "../styles/Skills.css";

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
    skills: ["Git", "GitHub", "Docker", "Vercel"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-heading">
          <p className="section-label">MY TOOLKIT</p>
          <h2>Technologies I Use</h2>

          <p className="skills-intro">
            The languages, frameworks, databases, and development tools I use
            to build modern full-stack applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <div className="skill-icon">{group.icon}</div>

              <h3>{group.title}</h3>

              <div className="skill-items">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;