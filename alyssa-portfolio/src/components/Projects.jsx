import "../styles/Projects.css";

function Projects() {
const projects = [
{
title: "Time Tracking App",
description: "Tracks hours, overtime, and calculates pay automatically.",
},
{
title: "Truck Inventory System",
description: "Inventory and work order management app for trucking companies.",
},
{
title: "Plant Shop",
description: "React e-commerce style plant store with search and cart features.",
},
{
title: "Portfolio Website",
description: "Responsive personal portfolio built with React and Vite.",
},
];

return (
<section id="projects" className="projects-section">
<h2>Projects</h2>

<div className="timeline-container">
{projects.map((project, index) => (
<div className="project-card" key={index}>
<div className="timeline-dot"></div>

<h3>{project.title}</h3>
<p>{project.description}</p>
</div>
))}
</div>
</section>
);
}

export default Projects;

