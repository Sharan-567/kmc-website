import { Container, Row, Col, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Header from "@/components/Header";
import s from "@/styles/contact.module.css";
import axios from "axios";
import React from "react";

const Contact = () => {
  const [data, setData] = React.useState({});
  const handleSubmit = () => {
    if (Object.keys(data).length === 0) {
      console.log("empty");
      toast("Please enter data", { autoClose: 2000, type: "error" });
    } else {
      axios
        .post("/api/proxy/api/module/marketing/marketing-activity/create", {
          marketingCampId: "6464fb446f6ad6339a947340",
          formId: "6464fc6e6f6ad6339a9473b9",
          userId: "611c0b8adc8dab65254fd11e",
          response: { results: data, scores: {}, createdAt: new Date() },
        })
        .then((response: any) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  };
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
                  <input
                    className="i-input"
                    placeholder="Your Name"
                    onChange={(e) => {
                      setData({ ...data, name: e.target.value });
                    }}
                  />
                </div>
              </Col>
              <Col sm={6}>
                <div className="i-control">
                  <input
                    className="i-input"
                    placeholder="Your Email"
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={12}>
                <div className="i-control">
                  <input
                    className="i-input"
                    placeholder="Subject"
                    onChange={(e) => {
                      setData({ ...data, subject: e.target.value });
                    }}
                  />
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
                    onChange={(e) => {
                      setData({ ...data, message: e.target.value });
                    }}
                  />
                </div>
              </Col>
            </Row>
          </form>
          <div className=" d-flex align-items-center justify-content-center">
            <Button onClick={handleSubmit} className={`${s.btn}`}>
              Submit Now
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
