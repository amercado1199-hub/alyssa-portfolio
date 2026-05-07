function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Hi, I'm <span className="highlight">Alyssa Mercado</span></h2>

        <h1>
          Software Engineer & Full Stack Developer
        </h1>

        <p>
          I build responsive web applications using React,
          JavaScript, Python, and modern frontend tools.
        </p>

        <div className="hero-buttons">
          <a href="#/projects" className="projects-btn">
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

