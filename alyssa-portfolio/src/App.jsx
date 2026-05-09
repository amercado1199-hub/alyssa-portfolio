import { HashRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ProjectsPage from "./pages/ProjectsPage";
import "./App.css";

function Home() {
return (
<>
<Hero />

<section id="about" className="section about-section">
<div className="glass-card">
<p className="section-label">Get to know me</p>
<h2>About Me</h2>
<p>
I’m an aspiring software engineer that studied full-stack web
development at Flatiron School. I enjoy building clean, responsive
web applications with React, JavaScript, Python, and modern frontend
tools. My background in healthcare, customer service, and life
insurance has helped me build strong communication, problem-solving,
and attention to detail skills that I bring into every project.
</p>
</div>
</section>

<section id="projects" className="section projects-section">
<p className="section-label">Portfolio</p>
<h2>Featured Projects</h2>

<div className="projects-grid">
<div className="project-card">
<span className="project-tag">React</span>
<h3>Task Manager App</h3>
<p>
A task management app built with React hooks and local state for
creating, tracking, and organizing tasks.
</p>
</div>

<div className="project-card">
<span className="project-tag">JavaScript</span>
<h3>Time Tracker App</h3>
<p>
A time tracking and pay calculator app that tracks hours,
overtime, and estimated earnings.
</p>
</div>
</div>
</section>

<section id="contact" className="section contact-section">
<div className="contact-card glass-card">
<p className="section-label">Let’s connect</p>
<h2>Contact Me</h2>
<p className="contact-text">
I’m open to software engineering opportunities, collaborations, and
networking.
</p>

<a className="email-link" href="mailto:amercado1199@gmail.com">
Email Me
</a>
</div>
</section>
</>
);
}

function App() {
return (
<HashRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/projects" element={<ProjectsPage />} />
</Routes>
</HashRouter>
);
}

export default App;

