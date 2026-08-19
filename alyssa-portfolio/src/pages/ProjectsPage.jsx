import {
  FaGithub,
  FaCode,
} from "react-icons/fa";

import "../styles/ProjectsPage.css";

const projects = [
  {
    number: "01",
    title: "Driftr",
    subtitle: "Weather-Aware Activity Finder",
    description:
      "A full-stack application that helps users discover things to do based on their location and current weather conditions. Driftr combines live weather data with a custom Drift Score to make activity recommendations more relevant to the user's environment.",
    tech: ["React", "Flask", "Python", "SQLite", "REST API"],
    highlights: [
      "Live weather data integration",
      "Custom Drift Score system",
      "Location-based recommendations",
      "JWT authentication",
      "Responsive React interface",
    ],
    github: "https://github.com/amercado1199-hub/Driftr",
    featured: true,
  },
  {
    number: "02",
    title: "HomeTrack Academy",
    subtitle: "Homeschool Management Platform",
    description:
      "A full-stack homeschool management application designed to help families organize students, subjects, lessons, attendance, field trips, and academic progress from one dashboard.",
    tech: ["React", "Flask", "SQLAlchemy", "SQLite", "REST API"],
    highlights: [
      "Student management",
      "Lesson and subject tracking",
      "Attendance records",
      "Field trip management",
      "User authentication and data isolation",
    ],
    github: "https://github.com/amercado1199-hub/HomeTrack-Academy",
  },
  {
    number: "03",
    title: "A.R.C.E. Massage Therapy",
    subtitle: "Professional Business Website",
    description:
      "A responsive client website created for a professional massage therapist. The site presents services, business information, booking access, and payment options through a polished mobile-friendly interface.",
    tech: ["React", "Vite", "CSS", "Vercel"],
    highlights: [
      "Built for a real client",
      "Responsive mobile design",
      "Service presentation",
      "Booking integration",
      "Production deployment",
    ],
    github: "https://github.com/amercado1199-hub/massage-therapy-website",
  },
  {
    number: "04",
    title: "Time Tracker & Pay Calculator",
    subtitle: "Work Hours & Earnings Tool",
    description:
      "A responsive application for tracking work hours and estimating earnings. The application calculates regular hours, overtime, and estimated pay while saving information locally for continued use.",
    tech: ["React", "JavaScript", "CSS", "LocalStorage"],
    highlights: [
      "Work-hour tracking",
      "Overtime calculations",
      "Estimated earnings",
      "Persistent local data",
      "Responsive interface",
    ],
    github: "https://github.com/amercado1199-hub/timesheet-pay-lab",
  },
];

function ProjectsPage() {
  return (
    <main className="projects-page">

      <section className="projects-page-hero">
        <div className="projects-page-container">
          <p className="section-label">MY WORK</p>

          <h1>
            Projects I've <span>Built.</span>
          </h1>

          <p className="projects-page-intro">
            A collection of full-stack applications, client work, and
            tools I've built while developing my skills as a software
            engineer.
          </p>
        </div>
      </section>

      <section className="projects-page-list">
        <div className="projects-page-container">

          {projects.map((project) => (
            <article
              className={`project-detail ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.title}
            >
              <div className="project-detail-preview">

                <div className="project-browser">
                  <div className="browser-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="browser-content">
                    <FaCode />
                    <h3>{project.title}</h3>

                    <p>
                      {project.subtitle}
                    </p>
                  </div>
                </div>

              </div>

              <div className="project-detail-content">

                <div className="project-number">
                  {project.number}
                </div>

                {project.featured && (
                  <span className="featured-label">
                    FEATURED PROJECT
                  </span>
                )}

                <h2>{project.title}</h2>

                <p className="project-subtitle">
                  {project.subtitle}
                </p>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-stack">
                  {project.tech.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-highlights">
                  <h3>Key Features</h3>

                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-detail-buttons">
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
      </section>

      <section className="projects-bottom-cta">
        <div className="projects-page-container">

          <div className="projects-cta-card">
            <p className="section-label">
              MORE TO COME
            </p>

            <h2>
              I'm always building something new.
            </h2>

            <p>
              I'm continuously experimenting with new technologies,
              improving existing projects, and turning new ideas into
              working software.
            </p>

            <a
              href="https://github.com/amercado1199-hub"
              className="project-live-btn"
            >
              <FaGithub />
              View My GitHub
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}

export default ProjectsPage;

