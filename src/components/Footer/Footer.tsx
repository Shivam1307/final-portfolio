import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>S</span>
        <span>Sharma</span>
      </a>
      <div>
        <p>
          This site made with React JS
          <img src={reactIcon} alt="React" /> a lot
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/shivam-sharma-148203bb"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>
      </div>
    </Container>
  );
}
