import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import { BsFillCircleFill } from "react-icons/bs";

export default function Navigation() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <TopBar />
      <BottomBarNav />
    </nav>
  );
}

const TopBar = () => {
  return (
    <div
      style={{
        borderBottom: "14px solid red",
        background: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 0rem",
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        <Image
          src="/images/logo.png"
          alt="manipal-logo"
          width={352}
          height={70}
          quality={100}
          style={{ objectFit: "contain" }}
        />

        <Image
          src="/images/big-logo.png"
          alt="manipal-logo"
          width={452}
          height={85}
          quality={100}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

const BottomBarNav = () => {
  return (
    <div
      className={`${styles.navigation}`}
      style={{ background: "white", height: "5rem" }}
    >
      <Container>
        <div style={{ position: "relative" }}>
          <Navbar
            className={`${styles.navigation__container}`}
            style={{
              position: "absolute",
              padding: "1.5rem",
              width: "100%",
              color: "white",
            }}
            expand="md"
            variant="dark"
          >
            <NavbarBrand></NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={`${styles.navigation__links_container} me-auto`}>
                <NavDropdown
                  title="About"
                  id={`${styles.navigation__dropdown_container}`}
                >
                  <NavDropdown.Item href="#action/3.1">
                    <BsFillCircleFill size={8} className="me-2" />
                    Event
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <BsFillCircleFill size={8} className="me-2" />
                    Team
                  </NavDropdown.Item>
                </NavDropdown>
                <Link className={`${styles.navigation__link}`} href="#home">
                  Speakers <br></br>and Program
                </Link>
                <Link
                  href={"/registration"}
                  className={`${styles.navigation__link}`}
                >
                  Registration
                </Link>
                <Link className={`${styles.navigation__link}`} href="/abstract">
                  Abstract
                </Link>
                <Link className={`${styles.navigation__link}`} href="/events">
                  Previous <br></br> Events
                </Link>
                <Link className={`${styles.navigation__link}`} href="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container>
    </div>
  );
};
