import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
  NavLink,
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
  const [expanded, setExpanded] = React.useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

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
            collapseOnSelect
            expand="lg"
            variant="dark"
            expanded={expanded}
          >
            <NavbarBrand></NavbarBrand>
            <Navbar.Toggle
              onClick={handleNavbarToggle}
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={`${styles.navigation__links_container} me-auto`}>
                <Link
                  onClick={handleLinkClick}
                  className={`${styles.navigation__link} ${
                    pathname === "/" ? styles.active : ""
                  }`}
                  href="/"
                >
                  About
                </Link>

                <Link
                  onClick={handleLinkClick}
                  className={`${styles.navigation__link} ${
                    pathname === "/programs" ? styles.active : ""
                  }`}
                  href="/programs"
                >
                  Speakers <br></br>and Program
                </Link>
                <Link
                  onClick={handleLinkClick}
                  href={"/registration"}
                  className={`${styles.navigation__link} ${
                    pathname === "/registration" ? styles.active : ""
                  }`}
                >
                  Registration
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className={`${styles.navigation__link} ${
                    pathname === "/abstract" ? styles.active : ""
                  }`}
                  href="/abstract"
                >
                  Abstract
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className={`${styles.navigation__link} ${
                    pathname === "/previousEvents" ? styles.active : ""
                  }`}
                  href="/previousEvents"
                >
                  Previous <br></br> Events
                </Link>
                <Link
                  onClick={handleLinkClick}
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
