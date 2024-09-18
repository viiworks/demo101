"use client";

import clsx from "clsx";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import styles from "./AboutSection.module.scss";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <section 
        className={clsx(styles["about-section"])}>
        <Container>
          <Row xl={2} lg={2} md={2} sm={1} xs={1}  className="align-items-center">
            <Col>
              <h1 className={styles["title"]}>About Our Hotel</h1>
              <p className={styles.description}>
              Experience the epitome of luxury by booking your stay at Hoteller. Whether it{"'"}s a romantic getaway, a family vacation, or a business trip,.
              </p>
              <Link
                href="about-us"
                className="btn btn-outline-dark btn-md mb-4"
              >Explore the Hotel</Link>
            </Col>
            <Col>
              <Image
                className={clsx(styles["rounded-overlay"], "rounded-4 img-fluid")}
                src="/assets/images/about-hero.png"
                height={400}
                width={500}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutSection;
