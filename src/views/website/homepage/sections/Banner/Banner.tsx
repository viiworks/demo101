"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect } from "react";
import { Col, Container, Button, Form, FormGroup, Label, Input, Row } from "reactstrap";

import styles from "./Banner.module.scss";

const Banner = () => {

  return (
    <section className={clsx(styles["hero-banner"], "align-items-center")}>
      <Container fluid>
        <Col>
          <div className={clsx(styles["text-wrap"], "text-white")}>
            <h1 className={styles.title}>Welcome to Hoteller</h1>
            <p className={styles.paragraph}>
              Nestled in the heart of breathtaking natural, our hotel offers a truly enchanting experience that caters to every aspect of your stay.
            </p>
          </div>
        </Col>
      </Container>
      <div className={styles["overlay"]}></div>
      <div className={styles["booking-wrapper"]}>
        <Row>
          <Col className="col-lg-3 col-md-6 col-sm-12 col-12">
          <FormGroup className={styles["form-group"]}>
            <Input
              bsSize="lg"
              id="exampleDate"
              name="date"
              placeholder="Check in Date"
              type="date"
            />
          </FormGroup>
          </Col>
          <Col className="col-lg-3 col-md-6 col-sm-12 col-12">
          <FormGroup>
            <Input
              bsSize="lg"
              id="exampleDate"
              name="date"
              placeholder="Check out Date"
              type="date"
            />
          </FormGroup>
          </Col>
          <Col className="col-lg-2 col-md-6 col-sm-12 col-12">
            <Input
              bsSize="lg"
              id="Adult"
              name="select"
              type="select"
            >
              <option>
                0 Adults
              </option>
              <option>
                1
              </option>
              <option>
                2
              </option>
              <option>
                3
              </option>
              <option>
                4
              </option>
              <option>
                5
              </option>
            </Input>
          </Col>
          <Col className="col-lg-2 col-md-6 col-sm-12 col-12">
            <Input
              className={styles["last-select"]}
              bsSize="lg"
              id="Adult"
              name="select"
              type="select"
            >
              <option>
                0 Children
              </option>
              <option>
                1
              </option>
              <option>
                2
              </option>
              <option>
                3
              </option>
              <option>
                4
              </option>
              <option>
                5
              </option>
            </Input>
          </Col>
          <Col className="col-lg-2">
            <Button className="btn btn-lg w-100">Search</Button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Banner;
