import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DEC20B "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>ICare</h3>
              <p>
                It's a health care domain project. I was working as a frontend
                developer. This project was made with Javascript as frontend
                technology. This project handle the overall management of an
                hospital and their patients data.
              </p>
              <h4>Roles and Responsibilities</h4>
              <p>
                <ul className="tech-list">
                  <li>Joined as a trainee.</li>
                  <li>Some end to end client-side feature implementation.</li>
                  <li>Issue fixing.</li>
                  <li> Daily status reporting and client interaction.</li>
                </ul>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DEC20B "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Exaltive</h3>
              <p>
                It's an e-learning domain project. It was used to create,
                manage, edit interactive videos. It was created with Javascript
                as frontend technology.
              </p>
              <h4>Roles and Responsibilities</h4>
              <p>
                <ul className="tech-list">
                  <li>Some end to end client-side feature implementation.</li>
                  <li>Issue fixing.</li>
                  <li> Daily status reporting and client interaction.</li>
                </ul>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DEC20B "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Raptivity</h3>
              <p>
                Its an elearning domain project. This application was basically
                used to create interactive slides with animations and some other
                interactive objects like Q&A, Quiz, etc. This project is 508
                compliant.
              </p>
              <h4>Roles and Responsibilities</h4>
              <p>
                <ul className="tech-list">
                  <li>
                    Whole project accessibility implementation according to 508
                    standard.
                  </li>
                  <li>Some end to end client-side feature implementation.</li>
                  <li>Issue fixing.</li>
                  <li> Daily status reporting and client interaction.</li>
                </ul>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js</li>
                <li>Redux</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DEC20B "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              {/* <div className="project-links"></div> */}
            </header>
            <div className="body">
              <h3>Admin Console</h3>
              <p>
                This project is made with react js with redux for store
                management. This project helps to manage and config other
                connected project. It is used to administrate other projects.
              </p>
              <h4>Roles and Responsibilities</h4>
              <p>
                <ul className="tech-list">
                  <li>Some end to end client-side feature implementation.</li>
                  <li>Issue fixing.</li>
                  <li> Daily status reporting and client interaction.</li>
                </ul>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js</li>
                <li>Redux</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DEC20B "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Knowledge Console</h3>
              <p>
                This project is based on knowledge domain. It is made with React
                js with react hooks.
              </p>
              <h4>Roles and Responsibilities</h4>
              <p>
                <ul className="tech-list">
                  <li>Worked on initial demos and proof of concepts.</li>
                  <li>Worked on the architecture of this project.</li>
                  <li>Main features implemented.</li>
                  <li>Daily status reporting and client interaction.</li>
                </ul>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js</li>
                <li>Redux</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
