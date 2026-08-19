import { FaGithub } from "react-icons/fa";
import "../styles/Projects.css";

const projects = [
  {
    title: "Driftr",
    description:
      "A weather-aware travel and activity finder that recommends things to do based on location, current conditions, and a custom Drift Score.",
    tech: ["React", "Flask", "SQLite", "Weather API"],
    github: "#",
    live: "#",
  },
  {
    title: "HomeTrack Academy",
    description:
      "A full-stack homeschool management platform for tracking students, lessons, subjects, attendance, field trips, and progress.",
    tech: ["React", "Flask", "SQLAlchemy", "SQLite"],
    github: "#",
    live: "#",
  },
  {
    title: "ARCE Massage Therapy",
    description:
      "A polished business website for a massage therapy professional with service information, booking access, and responsive design.",
    tech: ["React", "Vite", "CSS", "Vercel"],
    github: "#",
    live: "#",
  },
  {
    title: "Time Tracker & Pay Calculator",
    description:
      "A responsive tool for tracking work hours, calculating overtime, and estimating pay with saved data.",
    tech: ["React", "JavaScript", "CSS", "LocalStorage"],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-heading">
          <div>
            <p className="section-label">FEATURED PROJECTS</p>
            <h2>Things I’ve Built</h2>
          </div>

          <a href="#/projects" className="view-all-projects">
            View All Projects
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-preview">
                <span>{project.title}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    className="project-github-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                   <FaGithub />
                    View on GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;