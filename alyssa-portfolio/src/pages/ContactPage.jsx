import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiCheckCircle,
} from "react-icons/fi";

import "../styles/ContactPage.css";

function ContactPage() {
  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-page-hero">
        <div className="contact-page-container">
          <p className="section-label">LET'S CONNECT</p>

          <h1>
            Let's Build Something <span>Together.</span>
          </h1>

          <p className="contact-page-intro">
            I'm currently open to software engineering opportunities,
            freelance projects, collaborations, and networking. Whether
            you have an opportunity in mind or just want to connect,
            I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-page-main">
        <div className="contact-page-container contact-page-grid">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <p className="section-label">GET IN TOUCH</p>

            <h2>Start a conversation.</h2>

            <p className="contact-info-text">
              Have a project, opportunity, or question? Reach out by email
              or connect with me through one of the platforms below.
            </p>

            <div className="contact-methods">

              <a
                href="mailto:amwayz2022@gmail.com"
                className="contact-method"
              >
                <div className="contact-method-icon">
                  <FiMail />
                </div>

                <div>
                  <span>Email</span>
                  <p>amwayz2022@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/amercado1199-hub"
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >
                <div className="contact-method-icon">
                  <FiGithub />
                </div>

                <div>
                  <span>GitHub</span>
                  <p>View my code & projects</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/alyssa-mercado-73284a340"
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >
                <div className="contact-method-icon">
                  <FiLinkedin />
                </div>

                <div>
                  <span>LinkedIn</span>
                  <p>Connect with me professionally</p>
                </div>
              </a>

            </div>

            <div className="availability-card">
              <FiCheckCircle />

              <div>
                <h3>Open to Opportunities</h3>
                <p>
                  Currently interested in software engineering
                  opportunities and collaborations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

export default ContactPage;