import { Container, Row, Col, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Header from "@/components/Header";
import s from "@/styles/contact.module.css";
import React from "react";

const Contact = () => {
  const [data, setData] = React.useState({});

  const handleSubmit = () => {
    if (Object.keys(data).length === 0) {
      console.log("empty");
      toast("Please enter data", { autoClose: 2000, type: "error" });
    } else {
      fetch("/api/module/marketing/marketing-activity/create", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibTE2bGFic2FkbWluIiwidHlwZSI6IlN1cGVyVXNlciIsImNvbnRhY3QiOiI5OTgwODczODAwIiwiaWQiOiI2MDhmZDNhYjJjMDRhZDU1NjRkNzIxNTciLCJyb2xlcyI6W3siZGVmYXVsdFJvdXRlIjoid29ya2xpc3Qvc2NoZWR1bGVkIiwiX2lkIjoiNjM0YzY2MDVhNTgyNmQ0ZmFhODEwMTMwIiwibmFtZSI6IlRlc3QgUm9sIiwicGVybWlzc2lvbnMiOlt7ImFwcHJvdmFsTWV0YURhdGEiOnsiYmVoYXZpb3VyIjoibm9fbmVlZCIsIm5vT2ZBcHByb3ZhbHNOZWVkZWQiOjF9LCJfaWQiOiI2MzRjNjYwNWE1ODI2ZDRmYWE4MTAxMmUiLCJrZXkiOiJzZXR0bGVfcmVmdW5kIn1dLCJhbGxQZXJtaXNzaW9uc1NlbGVjdGVkIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTEwLTE2VDIwOjEzOjU3LjEyOFoiLCJjcmVhdGVkQnkiOnsiX2lkIjoiNjM0YzY2MDVhNTgyNmQ0ZmFhODEwMTJmIiwibmFtZSI6Im0xNmxhYnNhZG1pbiIsInVzZXJJZCI6IjYwOGZkM2FiMmMwNGFkNTU2NGQ3MjE1NyIsInVzZXJUeXBlIjoiU3VwZXJVc2VyIn0sInVwZGF0ZWRBdCI6IjIwMjItMTAtMTZUMjA6MTM6NTcuMTI4WiIsIl9fdiI6MH1dLCJzdG9yZXMiOltdLCJpYXQiOjE2ODUzNjkyMzYsImV4cCI6MTY4NTU0MjAzNn0.auIw0XqS-QWDRRr2pP8s8O6o9-ji7CzOJ652YZkr2Jc",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          marketingCampId: "6464fb446f6ad6339a947340",
          formId: "6464fc6e6f6ad6339a9473b9",
          userId: "611c0b8adc8dab65254fd11e",
          response: { results: data, scores: {}, createdAt: new Date() },
        }),
      })
        .then((response: any) => {
          toast("Success", { autoClose: 2000, type: "success" });
          setData({});
          console.log(JSON.stringify(response));
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
