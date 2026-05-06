import "../styles/Projects.css";

function ProjectsPage() {
  const projects = [
    {
      title: "Time Tracking & Pay Calculator App",
      description: "A responsive app that tracks hours worked, overtime, and estimated pay.",
      tech: ["React", "JavaScript", "CSS", "Local Storage"],
      github: "https://github.com/amercado1199-hub/timesheet-pay-lab",
      demo: "https://timesheet-pay-o4phyhyag-amercado1199-hubs-projects.vercel.app/",
    },
    {
      title: "Plant Shop",
      description: "An e-commerce style plant store with search, filtering, and cart features.",
      tech: ["React", "Vite", "Components", "State"],
      github: "https://github.com/amercado1199-hub/react-hooks-plant-shop-cr-vite",
      demo: "https://react-hooks-plantshop-cr-vite-delta.vercel.app/",
    },
    {
      title: "Task Management App",
      description: "A responsive task management app with task creation, search filtering, and real-time task tracking.",
      tech: ["React", "JavaScript", "Vite", "State Management"],
      github: "https://github.com/amercado1199-hub/react-hooks-task-manager-lab",
      demo: "https://react-hooks-task-manager-lab.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description: "A personal developer portfolio built to showcase projects and skills.",
      tech: ["React", "Vite", "CSS", "Responsive Design"],
      github: "https://github.com/amercado1199-hub/alyssa-portfolio",
    },
  ];

  return (
    <main className="projects-page">
      <section className="projects-header">
        <p>Here are some applications I have built while growing as a software engineer.</p>
        <a href="/" className="back-home">Back Home</a>
      </section>

      <section className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-page-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="tech-list">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <button className="demo-btn">Live Demo</button>
                </a>
              )}
              <a href={project.github} target="_blank" rel="noreferrer">
                <button className="github-btn">GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default ProjectsPage;
