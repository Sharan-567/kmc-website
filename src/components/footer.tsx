import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
  return (
    <div style={{ background: "#208ef3", padding: "0rem 1rem" }}>
      <Container fluid>
        <Row className={`${styles.footer__container}`}>
          <Col md={6}>
            <div>
              <p className={`${styles.footer__detail}`}>
                Department of Medical Genetics <br></br> Kasturba Medical
                College, Manipal <br></br> Manipal Academy of Higher Education
                <br></br> Manipal 576104, Karnataka
              </p>
              <div className="d-flex">
                <BsFillTelephoneFill size={13} className="text-white mt-2" />
                <p className="text-white ms-3" style={{ fontSize: "17px" }}>
                  +91 820 2922863
                </p>
              </div>
              <div className="d-flex mb-3">
                <MdEmail size={13} className="text-white mt-2" />
                <a
                  href="mailto: manipalgeneticsupdate7@gmail.com"
                  className="text-white ms-3"
                  style={{ fontSize: "17px" }}
                >
                  manipalgeneticsupdate7@gmail.com
                </a>
              </div>
              <div className="d-flex">
                <BsTwitter size={13} className="text-white mt-2" />
                <a
                  href="https://twitter.com/kmc_manipal"
                  className="text-white ms-3"
                  style={{ fontSize: "17px" }}
                >
                  https://twitter.com/kmc_manipal
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
            {/* <div className={`${styles.footer__icons_container}`}>
              <Image
                src="https://res.cloudinary.com/teleopdassets/image/upload/v1684342892/kmc/facebook_lafwmf.png"
                height={40}
                width={40}
                alt="facebook-logo"
                quality={100}
              />
              <a className="text-white" href="#">
                <h4>
                  Twitter
                  <Image
                    src="https://res.cloudinary.com/teleopdassets/image/upload/v1684342904/kmc/twitter_nu45al.png"
                    height={40}
                    width={40}
                    alt="twitter-logo"
                    style={{
                      marginRight: "5rem",
                      marginLeft: "1rem",
                      marginBottom: "0.5rem",
                    }}
                    quality={100}
                  />
                </h4>
              </a>
              <Image
                src="https://res.cloudinary.com/teleopdassets/image/upload/v1684342894/kmc/linkedin_oilurr.png"
                height={40}
                width={40}
                alt="linkedin-logo"
                quality={100}
              />
            </div> */}
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
