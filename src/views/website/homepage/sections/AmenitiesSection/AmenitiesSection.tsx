"use client";

import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import styles from "./AmenitiesSection.module.scss";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const AmenitiesSection = () => {
  return (
    <>
      <section className={styles["amenities-section"]}>
        <Container fluid="xl">
          <Row lg={4} md={2} sm={2} xs={1} className="d-flex align-items-center">
            <Col>
              <p className="mb-2">Enchanted with elegance</p>
              <h2 className="mb-5">Experience the
              Luxury</h2>
              <Link className={clsx("btn btn-outline-dark btn-md", styles["btn-more"])} href="">SEE MORE</Link>
            </Col>
            <Col><Image src="/assets/images/Rectangle-193.jpg" alt="" width={250} height={450} /></Col>
            <Col><Image src="/assets/images/Rectangle-194.jpg" alt="" width={250} height={450} /></Col>
            <Col><Image src="/assets/images/Rectangle-195.jpg" alt="" width={250} height={450} /></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AmenitiesSection;
