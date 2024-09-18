"use client";

import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import styles from "./RoomsSection.module.scss";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const RoomsSection = () => {
  return (
    <>
      <section className={styles["room-section"]}>
        <Container fluid="xl">
          <Row xl={2}>
            <Col>
              <p className="mb-2">Enchanted with elegance</p>
              <h2 className="mb-5">Choose Our Rooms</h2>
            </Col>
            <Col className={clsx("d-flex", styles["btn-wrap"])}>
              <Link className={clsx("btn btn-outline-dark", styles["btn-more"])} href="">SEE MORE</Link>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row lg={3} md={3} sm={2} xs={1}>
            <Col>
              <div className={styles["card"]}>
                <Image width={500} height={302} quality={100} src="/assets/images/image.jpg" alt="" />
                <div>
                  <h5>Standard Room</h5>
                  <p>27 m2 / 2 adults 1 children</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className={styles["card"]}>
                <Image width={500} height={302} quality={100} src="/assets/images/image.jpg" alt="" />
                <div>
                  <h5>Standard Room</h5>
                  <p>27 m2 / 2 adults 1 children</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className={styles["card"]}>
                <Image width={500} height={302} quality={100} src="/assets/images/image.jpg" alt="" />
                <div>
                  <h5>Standard Room</h5>
                  <p>27 m2 / 2 adults 1 children</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RoomsSection;
