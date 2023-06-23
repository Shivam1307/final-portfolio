import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>
          If you saw my potential or want to talk to me, don't hesitate to send
          me a message.
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:shivam130792@gmail.com">shivam130792@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+918827898827">(91) 8827898827</a>
        </div>
      </div>
      {/* <Form></Form> */}
    </Container>
  );
}
