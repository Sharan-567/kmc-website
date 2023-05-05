import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import s from "../styles/events.module.css";
import Header from "@/components/Header";

const Events = () => {
  return (
    <section className={s.container}>
      <Container>
        <Header
          title="Previous Events"
          barColor="#f32d20"
          className={s.reg_header}
        />
        <p className={s.subHeader}>A glimpse of our Successful Past Events.</p>
        <Event
          title="Indo-US Symposium on Disorders of the Developing Brain"
          date="27-28 October 2012"
          src="/images/e1.png"
        />
        <Event
          title="UCSC Genome Browser and Human Genome Bioinformatics Workshop"
          date="16-17 November, 2013"
          src="/images/e2.png"
        />
        <Event
          title="Manipal Genetics Update I"
          date="7 December 2014"
          src="/images/e3.png"
        />
        <Event
          title="Manipal Genetics Update II"
          subTitle="Hands-on Workshop on Analysis of Human Exome Data"
          date="8-22 January 2016"
          src="/images/e4.png"
        />
        <Event
          title="Manipal Genetics Update III"
          subTitle="Genetic Disorders of Bone"
          date="1-2 December 2016"
          src="/images/e5.png"
        />
        <Event
          title="Manipal Genetics Update IV"
          subTitle="Genetic Counseling"
          date="3-4 March 2017"
          src="/images/e6.png"
        />
        <Event
          title="Manipal Genetics Update V"
          subTitle="Genomics of Neurodevelopmental Disorders"
          date="9- 10 February 2019"
          src="/images/e7.png"
        />
        <Event
          title="Manipal Genetics Update VI"
          subTitle="Marfan syndrome and other aortopathies"
          date="14- 15 February 2020"
          src="/images/e8.png"
        />
      </Container>
    </section>
  );
};

type IEvent = {
  title: string;
  subTitle?: string;
  date: string;
  src: string;
};

const Event = ({ title, subTitle, date, src }: IEvent) => {
  return (
    <div className={s.eventContainer}>
      <Container className={s.imageContainer}>
        <Image className={s.image} src={src} quality={100} fill alt={title} />
      </Container>
      <div className={s.titleContainer}>
        <p className={s.title}>{title}</p>
        <p className={s.title}>{subTitle}</p>
        <p className={s.title}>{date}</p>
      </div>
    </div>
  );
};

export default Events;
