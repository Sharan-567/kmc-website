import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import s from "@/styles/registration.module.css";
import { FaPen } from "react-icons/fa";

const Registration = () => {
  return (
    <section style={{ paddingTop: "7rem" }}>
      <Container>
        <Header
          title="Registration"
          barColor="#f32d20"
          className={s.reg_header}
        />
        <div className={s.content}>
          <div>
            <h2 style={{ fontWeight: "600" }}>Registration is online!</h2>
            <p style={{ fontSize: "2rem" }}>
              Participation is in-person mode only
            </p>
          </div>
          <div>
            <Link href={"/registrationForm"}>
              <button className={s.btn}>
                <FaPen size={40} color="white" className="pe-3" />
                Online Registration Access
              </button>
            </Link>
          </div>
        </div>
        <div
          style={{
            marginTop: "2rem",
            fontSize: "28px",
            fontStyle: "italic",
            fontWeight: "400",
            marginBottom: "3rem",
          }}
        >
          <p>
            Early bird registration till: 30th October 2023<br></br> Last date
            for registration: 31st December 2023<br></br>{" "}
            <span style={{ color: "#f32d20" }}>No spot registrations</span>
          </p>
        </div>
        <div>
          <Table />
        </div>
      </Container>
    </section>
  );
};

export default Registration;

const Table = () => {
  return (
    <table className={s.table} style={{ width: "100%", textAlign: "center" }}>
      <thead>
        <tr style={{ background: "#208ef3", color: "white" }}>
          <th>Registration Fee</th>
          <th>Until 30th October 2023</th>
          <th>31st December 20233</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Students</td>
          <td>2500 INR</td>
          <td>3500 INR</td>
        </tr>
        <tr>
          <td>Faculty an Others</td>
          <td>4000 INR</td>
          <td>5500 INR</td>
        </tr>
      </tbody>
    </table>
  );
};
