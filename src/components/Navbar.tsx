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
import { useRouter } from "next/router";

export default function Navigation() {
  const { pathname } = useRouter();
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
      <TopBar pathname={pathname} />
      <BottomBarNav pathname={pathname} />
    </nav>
  );
}

const TopBar = ({ pathname }: { pathname: string }) => {
  console.log(pathname);
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
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/teleopdassets/image/upload/v1684342907/kmc/logo_yt73xm.png"
            alt="manipal-logo"
            width={352}
            height={70}
            quality={100}
            style={{ objectFit: "contain" }}
          />
        </Link>

        {pathname === "/" && (
          <Image
            className={styles.rightLogo}
            src="https://res.cloudinary.com/teleopdassets/image/upload/v1684342863/kmc/big-logo_q6jsvw.png"
            alt="manipal-logo-big"
            width={452}
            height={70}
            quality={100}
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
    </div>
  );
};

const BottomBarNav = ({ pathname }: { pathname: string }) => {
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
            expand="lg"
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
                <Link
                  className={`${styles.navigation__link} ${
                    pathname === "/" ? styles.active : ""
                  }`}
                  href="/"
                >
                  About
                </Link>
                {/* <div className={styles.homeContainer}>
                  {pathname === "/" ? (
                    <div className={styles.dropdown}>
                      <Link className={styles.dropdownLink} href="/">
                        About
                      </Link>
                      <div>
                        <BsFillCircleFill size={8} className="me-2" />
                        Event
                      </div>
                      <div>
                        <BsFillCircleFill size={8} className="me-2" />
                        Team
                      </div>
                    </div>
                  ) : (
                    <Link className={styles.homeLink} href="/">
                      About
                    </Link>
                  )}
                </div> */}
                <Link
                  className={`${styles.navigation__link} ${
                    pathname === "/programs" ? styles.active : ""
                  }`}
                  href="/programs"
                >
                  Speakers <br></br>and Program
                </Link>
                <Link
                  href={"/registration"}
                  className={`${styles.navigation__link} ${
                    pathname === "/registration" ? styles.active : ""
                  }`}
                >
                  Registration
                </Link>
                <Link
                  className={`${styles.navigation__link} ${
                    pathname === "/abstract" ? styles.active : ""
                  }`}
                  href="/abstract"
                >
                  Abstract
                </Link>
                <Link
                  className={`${styles.navigation__link} ${
                    pathname === "/previousEvents" ? styles.active : ""
                  }`}
                  href="/previousEvents"
                >
                  Previous <br></br> Events
                </Link>
                <Link
                  className={`${styles.navigation__link} ${
                    pathname === "/contact" ? styles.active : ""
                  }`}
                  href="/contact"
                >
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
