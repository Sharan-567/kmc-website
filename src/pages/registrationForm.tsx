import { Container, FormControl, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import s from "@/styles/registrationForm.module.css";

const RegsitrationForm = () => {
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
                  <input className="i-input" placeholder="Enter First name" />
                </div>
              </Col>
              <Col sm={4}>
                <div className="i-control">
                  <input className="i-input" placeholder="Enter Middle name" />
                </div>
              </Col>
              <Col sm={4}>
                <div className="i-control">
                  <input className="i-input" placeholder="Enter Last name" />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">Designation</label>
                  <input className="i-input" />
                </div>
              </Col>
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">Affiliation</label>
                  <input className="i-input" />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">
                    Email <span className="i-req">*</span>
                  </label>
                  <input className="i-input" />
                </div>
              </Col>
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">
                    Mobile Number <span className="i-req">*</span>
                  </label>
                  <input className="i-input" placeholder="Enter Middle name" />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={12}>
                <div className="i-control">
                  <label className="i-label">
                    Address of Correspondence <span className="i-req">*</span>
                  </label>
                  <textarea className="i-input" style={{ minHeight: "7rem" }} />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={4}>
                <div className="i-control">
                  <label className="i-label">
                    State <span className="i-req"></span>
                  </label>
                  <select className="i-input">
                    <option></option>
                    <option>..</option>
                  </select>
                </div>
              </Col>
              <Col sm={4}>
                <div className="i-control">
                  <label className="i-label">Country</label>
                  <select className="i-input">
                    <option></option>
                    <option>..</option>
                  </select>
                </div>
              </Col>
              <Col sm={4}>
                <div className="i-control">
                  <label className="i-label">
                    PinCode* <span className="i-req"></span>
                  </label>
                  <select className="i-input">
                    <option></option>
                    <option>..</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={12}>
                <div className="i-control">
                  <label className="i-label">
                    Details of payment of registration fee
                  </label>
                  <input className="i-input" />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">
                    Bank name <span className="i-req"></span>
                  </label>
                  <select className="i-input">
                    <option value="" disabled selected>
                      Choose Bank
                    </option>
                    <option>..</option>
                  </select>
                </div>
              </Col>
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">Mode of payment</label>
                  <select className="i-input">
                    <option value="" disabled selected>
                      Choose payment method
                    </option>
                    <option>..</option>
                  </select>
                </div>
              </Col>
            </Row>
          </form>
          <div className=" d-flex align-items-center justify-content-center">
            <button className={`${s.btn}`}>Continue</button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default RegsitrationForm;
