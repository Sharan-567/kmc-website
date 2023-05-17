import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import styles from "../styles/main.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header";

export default function Main() {
  return (
    <div>
      <Banner />
      <Detail />
      <CourselSection />
      <Team />
      <Venu />
    </div>
  );
}

const Banner = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imagewrapper}>
          <Image
            src="https://res.cloudinary.com/teleopdassets/image/upload/v1684342879/kmc/banner_ehiso0.png"
            alt="manipal acdemy of higher education"
            quality={100}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.overlay}></div>
          <div className={styles.textContainer}>
            <h1 className={styles.text}>
              Manipal Genetics Update VII <br></br> Cellular and Animal Models{" "}
              <br></br> for Rare Genetic Diseases <br></br> 18-20 January 2024
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = () => {
  return (
    <section style={{ padding: "5rem 0rem" }}>
      <Container>
        <Row>
          <Col lg={9}>
            <p className={styles.detailText}>
              Manipal Genetics Update is a biennial international conference to
              showcase latest developments in niche areas of medical genetics.
              The proposed seventh edition of this event is geared towards basic
              and clinician scientists involved in rare disease research with
              focus on various cellular and animal systems to model the
              pathophysiology of rare disease. Model systems to study rare
              disease can improve our understanding of disease biology, leading
              to the development of new diagnostic tools and biomarkers that
              help in early detection and intervention. Research into rare
              diseases can also help to address healthcare disparities and
              promote equitable access to healthcare, particularly for
              marginalized and underdeveloped and developing nations. Patients
              with rare diseases and their families often face significant
              financial burdens due to high medical costs and reduced
              productivity. Research into rare diseases can help reduce this
              burden through improved treatment options and access to care. The
              aim of this conference is to offer a common platform for various
              stakeholders involved rare disease diagnosis, research and
              management to collaborate, network and exchange unique knowledge.
              The Center for Rare Disease, a part of the department of Medical
              Genetics is funded by India Alliance will organize the conference.
              The conference would proved unprecedented access to rare disease
              research in India and around the world and add the momentum
              generated in alleviating rare disease through the recently
              introduced National Policy for Rare Diseases (NPRD), 2021 in
              March, 2021 for the treatment of rare disease patients.
            </p>
          </Col>
          <Col lg={3}>
            <div className={styles.listContainer}>
              <h2 className={styles.ulHader}>Important Dates & Deadlines</h2>
              <ul style={{ marginTop: "2.3rem" }}>
                <li className={styles.ulItem}>
                  Last date to register to the conference
                </li>
                <li className={styles.ulItem}>Last date to submit abstract</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const CourselSection = () => {
  const sliderRef = React.useRef<Slider>(null);
  const [currentSliderIdx, setSliderIdex] = React.useState<Number>(0);

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <></>,
    autoplay: true,
    beforeChange: (oi: Number, ni: Number) => {
      setSliderIdex(ni);
    },
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className={styles.couserlSection}>
      <div className={styles.couselContainer}>
        <div className={styles.coursel}>
          <Slider ref={sliderRef} {...settings}>
            <div className={styles.imageCouselContainer}>
              <Image
                className="service__img"
                src="https://res.cloudinary.com/teleopdassets/image/upload/v1684342879/kmc/banner_ehiso0.png"
                alt="coursel-images"
                fill
                style={{
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </div>
            <div className={styles.imageCouselContainer}>
              <Image
                className="service__img"
                src="https://res.cloudinary.com/teleopdassets/image/upload/v1684342879/kmc/banner_ehiso0.png"
                alt="coursel-images"
                fill
                style={{
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Container>
          <div className={styles.buttons}>
            <FaChevronLeft onClick={handlePrevClick} className={styles.btn} />
            <FaChevronRight onClick={handleNextClick} className={styles.btn} />
          </div>
        </Container>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section className={styles.teamSection}>
      <Container>
        <Header
          title="Team Medical Genetics"
          styles={{ fontSize: "2.7rem", fontWeight: "500" }}
          barColor="#f32d20"
        />
        <p className={styles.teamContent}>
          The department of Medical Genetics at Kasturba Medical College,
          Manipal has regular teaching and training programs for medical
          students, genetic counsellors and Ph. D scholars in addition to
          continuing medical education programs. The department strives to
          translate recent advances from research in the field of genetics to
          patient care. The department offers consultation services for patients
          and families with diverse genetic conditions and birth defects. It
          also offers the much-needed diagnostic services on its own and in
          collaboration with other laboratories in India and abroad. Patient
          care is further supported by genetic counselling on reproductive
          options and prenatal diagnosis. The department has a strong focus on
          research, mostly on rare genetic disorders including disease-gene
          discovery using the state-of-the-art sequencing technology
        </p>
      </Container>
    </section>
  );
};

const Venu = () => {
  return (
    <section className={styles.venuSection}>
      <Row>
        <Col lg={6} className={styles.venuLeftContainer}>
          <div className={styles.venuPicture}>
            <h1>Venue Picture</h1>
          </div>
        </Col>
        <Col lg={6} className={styles.venuRightContainer}>
          <Header
            title="The Venue"
            styles={{ color: "white", fontWeight: "500" }}
            barColor="white"
            className={styles.venuHeader}
          />
          <p className={styles.venuText}>
            Interact Lecture Hall- Ga <br></br> Department of Medical <br></br>
            Genetics <br></br> Kasturba Medical College,<br></br> Manipal
          </p>
        </Col>
      </Row>
    </section>
  );
};
