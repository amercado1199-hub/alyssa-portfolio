import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

        <p className="footer-copyright">
          © 2026 Alyssa Mercado. All rights reserved.
        </p>

        <p className="footer-made">
          &lt;/&gt; made with
          <FaHeart className="footer-heart" />
          and lots of coffee
        </p>

    </footer>
  );
}

export default Footer;
    