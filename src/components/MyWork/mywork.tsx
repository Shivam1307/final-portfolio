import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "../Portfolio/styles";
import MyCalendar from "./calendar/mycalendar";
import { useNavigate } from "react-router-dom";

export function MyWork() {
  const navigate = useNavigate();
  return (
    <Container id="mywork">
      <h2>My Work</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="d-flex">
              <div className="projectview">
                <MyCalendar />
              </div>
              <div className="projectdesc">
                <h3>Time And Calendar</h3>
                <p>
                  Its a basic component we are always using in any of the web
                  application. I have created it as we can use it anywhere. We
                  can modified this according to our use case.
                </p>
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="d-flex">
              <div className="projectview">
                <button
                  onClick={() => {
                    navigate("/my-portfolio/dashboard");
                  }}
                >
                  Go to Dashboard
                </button>
              </div>
              <div className="projectdesc">
                <h3>Time And Calendar</h3>
                <p>
                  Its a basic component we are always using in any of the web
                  application. I have created it as we can use it anywhere. We
                  can modified this according to our use case.
                </p>
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
