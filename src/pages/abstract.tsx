import { Container } from "react-bootstrap";
import Header from "@/components/Header";
import s from "@/styles/abstract.module.css";

export default function Abstract() {
  return (
    <section style={{ paddingTop: "5rem" }}>
      <Container>
        <Header title="Abstract" barColor="#f32d20" className={s.reg_header} />
        <p className={s.content}>
          Last date for submission of abstracts: 15th October 2023 <br></br>
          Intimation of acceptance of abstracts: 15th December 2023
        </p>
        <Header
          title="Guidelines for submission of abstracts"
          barColor="#f32d20"
          className={s.reg_header2}
        />
        <ul className={s.list}>
          <li>Abstract submission is online.</li>
          <li>
            Selected abstracts in line with the theme of conference will have
            opportunity for platform presentation.
          </li>
          <li>
            Abstract should be unstructured, maximum 250 words, Calibri font
            with 12 font size.
          </li>
        </ul>
        <p>
          <a className={s.link}>For template click here</a>
        </p>
        <button className={s.btn}> Upload the abstract here</button>
      </Container>
    </section>
  );
}
