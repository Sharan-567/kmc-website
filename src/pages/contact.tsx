import { Container, FormControl, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import s from "@/styles/contact.module.css";

const Contact = () => {
  return (
    <div>
      <section style={{ paddingTop: "7rem" }}>
        <Container>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <Header
              title="Have a Question?"
              barColor="#f32d20"
              center
              className={s.reg_header}
            />
            <p className={s.subtitle}>
              Fill out the form below and we will get back to you
            </p>
          </div>
          <form style={{ marginTop: "5rem" }}>
            <Row className="my-4">
              <Col sm={6}>
                <div className="i-control">
                  <input className="i-input" placeholder="Your Name" />
                </div>
              </Col>
              <Col sm={6}>
                <div className="i-control">
                  <input className="i-input" placeholder="Your Email" />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={12}>
                <div className="i-control">
                  <input className="i-input" placeholder="Subject" />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={12}>
                <div className="i-control">
                  <textarea
                    style={{ minHeight: "10rem" }}
                    className="i-input"
                    placeholder="Your message"
                  />
                </div>
              </Col>
            </Row>
          </form>
          <div className=" d-flex align-items-center justify-content-center">
            <button className={`${s.btn}`}>Submit Now</button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
