import Link from "next/link";
import Image from "next/image";
import { Container, Nav, NavDropdown } from "react-bootstrap";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "white",
      }}
    >
      <TopBar />
      <Link href={"/contact"}>contact</Link>
      <Link href={"/"}>main</Link>
    </nav>
  );
}

const TopBar = () => {
  return (
    <div style={{ borderBottom: "14px solid red" }}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 0rem",
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
      </Container>
    </div>
  );
};
