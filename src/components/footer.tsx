import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
  return (
    <div style={{ background: "#208ef3" }}>
      <Container>
        <Row className={`${styles.footer__container}`}>
          <Col md={6}>
            <div>
              <p className={`${styles.footer__detail}`}>
                Department of Medical Genetics <br></br> Kasturba Medical
                College, Manipal <br></br> Manipal Academy of Higher Education
                <br></br> Manipal 576104, Karnataka
              </p>
              <div className="d-flex">
                <BsFillTelephoneFill size={25} className="text-white" />
                <p className="text-white ms-3" style={{ fontSize: "1.3rem" }}>
                  +91(820)2934001, 2923149
                </p>
              </div>
              <div className="d-flex">
                <MdEmail size={25} className="text-white" />
                <a
                  href="mailto: genetics.clinic@manipal.edu"
                  className="text-white ms-3"
                  style={{ fontSize: "1.4rem" }}
                >
                  genetics.clinic@manipal.edu
                </a>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              flexDirection: "column",
            }}
          >
            <div className={`${styles.footer__icons_container}`}>
              <Image
                src="https://res.cloudinary.com/teleopdassets/image/upload/v1684342892/kmc/facebook_lafwmf.png"
                height={40}
                width={40}
                alt="facebook-logo"
                quality={100}
              />
              <Image
                src="https://res.cloudinary.com/teleopdassets/image/upload/v1684342904/kmc/twitter_nu45al.png"
                height={40}
                width={40}
                alt="twitter-logo"
                quality={100}
              />
              <Image
                src="https://res.cloudinary.com/teleopdassets/image/upload/v1684342894/kmc/linkedin_oilurr.png"
                height={40}
                width={40}
                alt="linkedin-logo"
                quality={100}
              />
            </div>
            <Image
              className={`${styles.footer_logo}`}
              src="https://res.cloudinary.com/teleopdassets/image/upload/v1684342906/kmc/white-logo_isppzm.png"
              height={280}
              width={540}
              alt="white-logo"
              quality={100}
              style={{ objectFit: "contain" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
