import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import Me from "../../assets/me.svg";

export function About() {
  return (
    <Container id="aboutme">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            Having experience of more than 5 years working as a Software
            Engineer, I find myself a highly motivated and passionate person
            continuing to seek opportunities in this fast paced and dynamic
            field of Software and Information Technology.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            After completing bachelor’s degree in computer science, I grabbed an
            opportunity to work with a multinational firm ‘Harbinger Group,
            India’ where I got well versed with concepts of Health domain and
            software development. I have started working as a trainee at
            ‘Harbinger Group, Pune’ and was absorbed by the company as a
            Software Engineer.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.6 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Having felt the need to move out of my comfort zone, I got myself a
            job as Software Engineer 1 [Product Development, Front-end Engineer]
            at e-Gain Communications. There, I got in depth knowledge and
            expertise into agile methodologies, product management, planning and
            development. In e-Gain, I am working in knowledge domain. I also got
            promoted as Software Engineer 2 and handling a team. My roles and
            responsibilities are to create new features and resolving major
            bugs. Currently I am working on React JS technology with Redux/
            React hooks. Moreover, I have experience working on Git and SVN.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.8 * 1000}>
          <p>
            Creativity, receptivity & attention to detail along with excellent
            technical skills make me a talented Developer. Given an opportunity,
            I would like to grow both on my personal as well as professional
            front, to bring out the best for the organization. Kindly look into
            my application. Hoping to hear from you soon.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Technologies worked on:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={Me} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
