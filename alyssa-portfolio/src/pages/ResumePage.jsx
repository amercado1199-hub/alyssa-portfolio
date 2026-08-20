import {
  FiDownload,
  FiExternalLink,
  FiBriefcase,
  FiBookOpen,
} from "react-icons/fi";

import "../styles/ResumePage.css";

function ResumePage() {
  return (
    <main className="resume-page">

      {/* HERO */}
      <section className="resume-hero">
        <div className="resume-container">
          <p className="section-label">RESUME</p>

          <h1>
            Experience & <span>Education.</span>
          </h1>

          <p className="resume-intro">
            Software Engineer with experience building full-stack and
            front-end applications using React, JavaScript, Python,
            Flask, SQL, and modern development tools.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-main-button"
          >
            <FiDownload />
            Download Resume
          </a>
        </div>
      </section>


      {/* EXPERIENCE */}
      <section className="resume-section">
        <div className="resume-container">

          <div className="resume-heading">
            <p className="section-label">EXPERIENCE</p>
            <h2>Professional Experience</h2>
          </div>

          <div className="resume-timeline">

            <ResumeItem
              icon={<FiBriefcase />}
              title="Freelance Web Developer"
              company="A.R.C.E. Massage Therapy"
              description="Designed and developed a complete website for a massage therapy business, creating a responsive and professional digital presence for the client."
              tags={[
                "React",
                "Vite",
                "CSS",
                "Responsive Design",
                "Deployment",
              ]}
            />

            <ResumeItem
              icon={<FiBriefcase />}
              title="Nursing Assistant"
              company="Eshyft"
              description="Worked alongside healthcare teams while maintaining accuracy, attention to detail, communication, and responsibility in a fast-paced environment."
              tags={[
                "Teamwork",
                "Communication",
                "Attention to Detail",
              ]}
            />

          </div>
        </div>
      </section>


      {/* EDUCATION */}
      <section className="resume-section resume-education-section">
        <div className="resume-container">

          <div className="resume-heading">
            <p className="section-label">EDUCATION</p>
            <h2>Education & Training</h2>
          </div>

          <div className="resume-education-grid">

            <article className="resume-education-card">
              <div className="resume-card-icon">
                <FiBookOpen />
              </div>

              <div>
                <span>SOFTWARE ENGINEERING CERTIFICATION</span>
                <h3>Flatiron School</h3>

                <p>
                  Full-stack software engineering training covering
                  JavaScript, React, Python, Flask, SQL, APIs,
                  authentication, databases, testing, Git, and modern
                  development workflows.
                </p>
              </div>
            </article>

            <article className="resume-education-card">
              <div className="resume-card-icon">
                <FiBookOpen />
              </div>

              <div>
                <span>CERTIFIED NURSING ASSISTANT CERTIFICATION</span>
                <h3>Angels Of Mercy</h3>

                <p>
                  CNA training through Angels of Mercy and CPR certification through the American Heart Association.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>


      {/* TECHNICAL SUMMARY */}
      <section className="resume-section">
        <div className="resume-container">

          <div className="resume-heading">
            <p className="section-label">TECHNICAL SKILLS</p>
            <h2>Development Toolkit</h2>
          </div>

          <div className="resume-skills-grid">

            <SkillBox
              title="Languages"
              items={[
                "JavaScript",
                "Python",
                "HTML",
                "CSS",
                "SQL",
              ]}
            />

            <SkillBox
              title="Frontend"
              items={[
                "React",
                "React Router",
                "Vite",
              ]}
            />

            <SkillBox
              title="Backend"
              items={[
                "Flask",
                "SQLAlchemy",
                "REST APIs",
              ]}
            />

            <SkillBox
              title="Tools & Testing"
              items={[
                "Git",
                "GitHub",
                "VS Code",
                "Postman",
                "npm",
                "Vitest",
                "Docker",
                "React Testing Library",
              ]}
            />

          </div>
        </div>
      </section>


      {/* PROJECTS */}
      <section className="resume-section resume-project-section">
        <div className="resume-container">

          <div className="resume-heading">
            <p className="section-label">SELECTED WORK</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="resume-project-grid">

            <ProjectItem
              title="Driftr"
              text="Weather-aware activity and travel application."
            />

            <ProjectItem
              title="HomeTrack Academy"
              text="Full-stack homeschool management application."
            />

            <ProjectItem
              title="A.R.C.E. Massage Therapy"
              text="Professional website developed for a real client."
            />

            <ProjectItem
              title="Time Tracker & Pay Calculator"
              text="Work-hour tracking, overtime, and pay calculation application."
            />

          </div>
        </div>
      </section>


      {/* DOWNLOAD CTA */}
      <section className="resume-bottom">
        <div className="resume-container">

          <div className="resume-bottom-card">

            <p className="section-label">
              FULL RESUME
            </p>

            <h2>
              Want the complete version?
            </h2>

            <p>
              Download my résumé for a complete overview of my
              technical skills, projects, education, and professional
              background.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-main-button"
            >
              <FiDownload />
              Download Resume
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}


function ResumeItem({
  icon,
  title,
  company,
  description,
  tags,
}) {
  return (
    <article className="resume-item">

      <div className="resume-item-icon">
        {icon}
      </div>

      <div className="resume-item-content">

        <p className="resume-company">
          {company}
        </p>

        <h3>{title}</h3>

        <p className="resume-description">
          {description}
        </p>

        <div className="resume-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

      </div>

    </article>
  );
}


function SkillBox({ title, items }) {
  return (
    <article className="resume-skill-box">
      <h3>{title}</h3>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}


function ProjectItem({ title, text }) {
  return (
    <article className="resume-project-card">
      <h3>{title}</h3>

      <p>{text}</p>

      <a href="#/projects">
        View Project
        <FiExternalLink />
      </a>
    </article>
  );
}

export default ResumePage;