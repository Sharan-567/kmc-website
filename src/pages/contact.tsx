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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibTE2bGFic2FkbWluIiwidHlwZSI6IlN1cGVyVXNlciIsImNvbnRhY3QiOiI5OTgwODczODAwIiwicHJvZmlsZVVSTCI6bnVsbCwic2lnbiI6Imh0dHBzOi8vbXl0ZWxlb3BkLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9zaWduLTE2ODA3ODAxNTM0NDkucG5nIiwiaWQiOiI2MTFjMGI4YWRjOGRhYjY1MjU0ZmQxMWUiLCJkZXBhcnRtZW50IjoiIiwicm9sZXMiOlt7ImRlZmF1bHRSb3V0ZSI6IndvcmtsaXN0L3NjaGVkdWxlZCIsIl9pZCI6IjYzMjFhNTA0YTQ2YjJjNzlmNmYwMWNiZiIsIm5hbWUiOiJUZXN0IFJvbGUiLCJkZXNjcmlwdGlvbiI6IiIsInBlcm1pc3Npb25zIjpbeyJhcHByb3ZhbE1ldGFEYXRhIjp7ImJlaGF2aW91ciI6Im5vX25lZWQiLCJub09mQXBwcm92YWxzTmVlZGVkIjoxfSwiX2lkIjoiNjMyMWE1MDRhNDZiMmM3OWY2ZjAxY2JkIiwia2V5Ijoic2V0dGxlX3JlZnVuZCJ9XSwiYWxsUGVybWlzc2lvbnNTZWxlY3RlZCI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMi0wOS0xNFQwOTo1NToxNi41NjNaIiwiY3JlYXRlZEJ5Ijp7Il9pZCI6IjYzMjFhNTA0YTQ2YjJjNzlmNmYwMWNiZSIsIm5hbWUiOiJtMTZsYWJzYWRtaW4iLCJ1c2VySWQiOiI2MTFjMGI4YWRjOGRhYjY1MjU0ZmQxMWUiLCJ1c2VyVHlwZSI6IlN1cGVyVXNlciJ9LCJ1cGRhdGVkQXQiOiIyMDIyLTA5LTE0VDA5OjU1OjE2LjU2M1oiLCJfX3YiOjB9XSwic3RvcmVzIjpbXSwiaWF0IjoxNjg0MzM4NTAxLCJleHAiOjE2ODQ1MTEzMDF9.VAqDsdbuMShyGuR_AGB0DdPAcgqKsy7tOYCW8Xd6_X8",
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
