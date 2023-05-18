import { Container, Button, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import s from "@/styles/registrationForm.module.css";
import { toast } from "react-toastify";
import axios from "axios";
import React from "react";
import Link from "next/link";

const RegsitrationForm = () => {
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
