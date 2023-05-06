import React from "react";
import s from "@/styles/program.module.css";
import Header from "@/components/Header";
import { Col, Container, Row } from "react-bootstrap";

const Program = () => {
  return (
    <section className={s.container}>
      <Container>
        <Header
          title="Speakers and Program"
          barColor="#f32d20"
          className={s.reg_header}
        />
        <p className={s.subHeader}>
          Meet our confirmed conference speakers for the 2024 conference.
        </p>
        <Row style={{ marginTop: "5rem", marginBottom: "6rem" }}>
          <Col sm={4}>
            <div className={s.speakerImageContainer}></div>
            <p className={s.speakerTitle}>Name of Speaker</p>
          </Col>
          <Col sm={4}>
            <div className={s.speakerImageContainer}></div>
            <p className={s.speakerTitle}>Name of Speaker</p>
          </Col>
          <Col sm={4}>
            <div className={s.speakerImageContainer}></div>
            <p className={s.speakerTitle}>Name of Speaker</p>
          </Col>
        </Row>
        <Header
          title="Program at a Glance"
          barColor="#f32d20"
          className={s.reg_header}
        />
        <Day1 />
        <Day2 />
        <Day3 />
      </Container>
    </section>
  );
};

const Day1 = () => {
  return (
    <div className={s.tableContainer}>
      <table className={s.table} style={{ width: "100%", textAlign: "center" }}>
        <tr
          style={{
            background: "#208ef3",
            color: "white",
          }}
        >
          <th colSpan={3}>DAY 1 : 18 JANUARY 2024</th>
        </tr>
        <tr style={{ height: "3rem" }}>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr
          style={{
            background: "rgba(32, 142, 243, 0.41)",
            color: "black",
            borderRadius: "5px",
          }}
        >
          <th style={{ borderRight: "2px solid white" }}>Time</th>
          <th>Program</th>
          <th style={{ borderLeft: "2px solid white" }}>Program</th>
        </tr>
        <tr>
          <td className={s.tleft}>08:45 AM - 09.00 AM</td>
          <td>Welcome note</td>
          <td>Dr Anju Shukla</td>
        </tr>
        <tr className={s.highlight}>
          <td colSpan={3}>Session I: Leukodystrophy</td>
        </tr>
        <tr>
          <td className={s.tleft}>09:00 AM - 09:30 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>09:30 AM - 10:00 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>10:00 AM - 10:30 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>10:30 AM - 11:00 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>11:00 AM - 11:30 AM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr className={s.highlight}>
          <td colSpan={3}>Session II: Epilepsy</td>
        </tr>
        <tr>
          <td className={s.tleft}>11:30 AM - 12:00 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>12:00 PM - 12:30 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>12:30 PM - 01:00 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>01:00 PM - 02:00 PM</td>
          <td>Lunch</td>
          <td></td>
        </tr>
        <tr className={s.highlight}>
          <td colSpan={3}>Session III: Neurodevelopmental disorders- 1</td>
        </tr>
        <tr>
          <td className={s.tleft}>02:00 PM - 02:30 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>02:30 PM - 03:00 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>03:00 PM - 03:30 PM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr className={s.highlight}>
          <td colSpan={3}>Session IV: Neurodevelopmental disorders- 2</td>
        </tr>
        <tr>
          <td className={s.tleft}>03:30 PM - 04:00 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>04:00 PM - 04:30 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>04:30 PM - 05:00 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>05:00 PM - 06:00 PM</td>
          <td>Poster viewing/networking</td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

const Day2 = () => {
  return (
    <div className={s.tableContainer}>
      <table className={s.table} style={{ width: "100%", textAlign: "center" }}>
        <tr
          style={{
            background: "#208ef3",
            color: "white",
          }}
        >
          <th colSpan={3}>DAY 2 : 19 JANUARY 2024</th>
        </tr>
        <tr style={{ height: "3rem" }}>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr
          style={{
            background: "rgba(32, 142, 243, 0.41)",
            color: "black",
            borderRadius: "5px",
          }}
        >
          <th style={{ borderRight: "2px solid white" }}>Time</th>
          <th>Program</th>
          <th style={{ borderLeft: "2px solid white" }}>Program</th>
        </tr>
        <tr style={{ height: "2rem" }}></tr>
        <tr className={s.highlight}>
          <td colSpan={3}>Session I: Mitochondrial disorders</td>
        </tr>
        <tr>
          <td className={s.tleft}>08:30 AM - 09:00 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>09:00 AM - 09:30 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>09:30 AM - 10:00 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>10:00 AM - 10:30 AM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr className={s.highlight}>
          <td colSpan={3}>Session II: Cardiac genetics</td>
        </tr>
        <tr>
          <td className={s.tleft}>10:30 AM - 11:00 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>11:00 AM - 11:30 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>11:30 AM - 12:00 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>12:00 PM - 12:30 PM</td>
          <td>Fetal disorders</td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>12:30 PM - 01:00 PM</td>
          <td>Fetal disorders</td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>01:00 PM - 02:00 PM</td>
          <td>Lunch</td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>02:00 PM - 03:00 PM</td>
          <td>Poster viewing/networking</td>
          <td></td>
        </tr>
        <tr className={s.highlight}>
          <td colSpan={3}>Session III: Craniofacial/skeletal defects</td>
        </tr>
        <tr>
          <td className={s.tleft}>03:00 PM - 03:30 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>03:30 PM - 04:00 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>04:00 PM - 04:30 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>04:30 PM - 05:00 PM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>05:00 PM- 06:00 PM</td>
          <td>Poster viewing/networking</td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

const Day3 = () => {
  return (
    <div className={s.tableContainer}>
      <table className={s.table} style={{ width: "100%", textAlign: "center" }}>
        <tr
          style={{
            background: "#208ef3",
            color: "white",
          }}
        >
          <th colSpan={3}>DAY 3 : 20 JANUARY 2024</th>
        </tr>
        <tr style={{ height: "3rem" }}>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr
          style={{
            background: "rgba(32, 142, 243, 0.41)",
            color: "black",
            borderRadius: "5px",
          }}
        >
          <th style={{ borderRight: "2px solid white" }}>Time</th>
          <th>Program</th>
          <th style={{ borderLeft: "2px solid white" }}>Program</th>
        </tr>
        <tr style={{ height: "2rem" }}></tr>
        <tr>
          <td className={s.tleft}>08:00 AM - 09:00 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr className={s.highlight}>
          <td colSpan={3}>Session I: Ciliopathies</td>
        </tr>
        <tr>
          <td className={s.tleft}>09:00 AM - 09:30 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>09:30 AM - 10:00 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>10:00 AM - 10:30 AM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>10:30 AM - 11:00 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr className={s.highlight}>
          <td colSpan={3}>Session II: Rare diseases research in India</td>
        </tr>
        <tr>
          <td className={s.tleft}>11:00 AM - 11:30 AM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>11:30 AM - 12:00 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>12:00 PM - 12:30 PM</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>12:30 PM - 01:00 PM</td>
          <td>Lunch</td>
          <td></td>
        </tr>
        <tr>
          <td className={s.tleft}>01:00 PM - 02:00 PM</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Program;
