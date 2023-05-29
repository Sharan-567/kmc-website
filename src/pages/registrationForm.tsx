import { Container, Button, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import s from "@/styles/registrationForm.module.css";
import { toast } from "react-toastify";
import React from "react";
import Link from "next/link";

const RegsitrationForm = () => {
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
          marketingCampId: "6464fedc6f6ad6339a947493",
          formId: "6464fe4b6f6ad6339a94745e",
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
          <Header
            title="Online Registration Form"
            barColor="#f32d20"
            className={s.reg_header}
          />
          <form style={{ marginTop: "5rem" }}>
            <Row className="my-4">
              <Col sm={4}>
                <div className="i-control">
                  <label className="i-label">
                    Full name <span className="i-req">*</span>
                  </label>
                  <input
                    className="i-input"
                    placeholder="Enter First name"
                    onChange={(e) => {
                      setData({ ...data, "first-name": e.target.value });
                    }}
                  />
                </div>
              </Col>
              <Col sm={4}>
                <div className="i-control">
                  <input
                    className="i-input"
                    placeholder="Enter Middle name"
                    onChange={(e) => {
                      setData({ ...data, "middle-name": e.target.value });
                    }}
                  />
                </div>
              </Col>
              <Col sm={4}>
                <div className="i-control">
                  <input
                    className="i-input"
                    placeholder="Enter Last name"
                    onChange={(e) => {
                      setData({ ...data, "last-name": e.target.value });
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">Designation</label>
                  <input
                    className="i-input"
                    onChange={(e) => {
                      setData({ ...data, designation: e.target.value });
                    }}
                  />
                </div>
              </Col>
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">Affiliation</label>
                  <input
                    className="i-input"
                    onChange={(e) => {
                      setData({ ...data, affiliation: e.target.value });
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">
                    Email <span className="i-req">*</span>
                  </label>
                  <input
                    className="i-input"
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                  />
                </div>
              </Col>
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">
                    Mobile Number <span className="i-req">*</span>
                  </label>
                  <input
                    className="i-input"
                    placeholder="Enter Mobile no."
                    onChange={(e) => {
                      setData({ ...data, mobile: e.target.value });
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={12}>
                <div className="i-control">
                  <label className="i-label">
                    Address of Correspondence <span className="i-req">*</span>
                  </label>
                  <textarea
                    className="i-input"
                    style={{ minHeight: "7rem" }}
                    onChange={(e) => {
                      setData({ ...data, address: e.target.value });
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={4}>
                <div className="i-control">
                  <label className="i-label">
                    State <span className="i-req"></span>
                  </label>
                  <input
                    className="i-input"
                    placeholder="Enter State"
                    onChange={(e) => {
                      setData({ ...data, state: e.target.value });
                    }}
                  />
                </div>
              </Col>
              <Col sm={4}>
                <div className="i-control">
                  <label className="i-label">Country</label>
                  <input
                    className="i-input"
                    placeholder="Enter Country"
                    onChange={(e) => {
                      setData({ ...data, country: e.target.value });
                    }}
                  />
                </div>
              </Col>
              <Col sm={4}>
                <div className="i-control">
                  <label className="i-label">
                    PinCode* <span className="i-req"></span>
                  </label>
                  <input
                    className="i-input"
                    placeholder="Enter Pincode"
                    onChange={(e) => {
                      setData({ ...data, pincode: e.target.value });
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={12}>
                <div className="i-control">
                  <label className="i-label">
                    Details of payment of registration fee
                  </label>
                  <input
                    className="i-input"
                    onChange={(e) => {
                      setData({ ...data, "payment-details": e.target.value });
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">
                    Bank name <span className="i-req"></span>
                  </label>
                  <input
                    className="i-input"
                    onChange={(e) => {
                      setData({ ...data, bank: e.target.value });
                    }}
                  />
                </div>
              </Col>
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">Mode of payment</label>
                  <input
                    className="i-input"
                    onChange={(e) => {
                      setData({ ...data, "payment-mode": e.target.value });
                    }}
                  />
                </div>
              </Col>
            </Row>
          </form>
          <div className=" d-flex align-items-center justify-content-center">
            <Button onClick={handleSubmit} className={`${s.btn}`}>
              Continue
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default RegsitrationForm;
