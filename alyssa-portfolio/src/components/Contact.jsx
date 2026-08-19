import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <p className="section-label">LET'S CONNECT</p>

          <h2>Get In Touch</h2>

          <div className="contact-line"></div>

          <p className="contact-intro">
            I’m currently open to software engineering opportunities,
            collaborations, and networking. If you’d like to connect,
            feel free to reach out.
          </p>

          <div className="contact-details">
            <a href="mailto:amwayz2022@gmail.com">
              <FaEnvelope />
              <span>amwayz2022@gmail.com</span>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Send Me a Message</h3>

          <form
            action="mailto:amwayz2022@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What would you like to talk about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;