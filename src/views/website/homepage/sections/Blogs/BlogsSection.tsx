"use client";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import styles from "./BlogsSection.module.scss";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const BlogsSection = () => {
  return (
    <>
      <section className={styles["blogs"]}>
        <Container fluid="xl">
          <Row xl={1}>
            <Col>
              <p className="mb-2 text-center">Lorem Ipsum Dolor</p>
              <h2 className="mb-4 text-center">Latest Updates</h2>
            </Col>
          </Row>
          <Row xl={3} lg={3} md={3} sm={1} xs={1}>
            <Col>
              <Link href="">
                  <Image width={500} height={302} quality={100} src="/assets/images/image.jpg" alt="" />
                  <h3>Amet consectetur. Nam volutpat feugiat tellus nascetur eget egestas integer.</h3>
              </Link>
            </Col>
            <Col>
              <Link href="">
                  <Image width={500} height={302} quality={100} src="/assets/images/image.jpg" alt="" />
                  <h3>Ipsum dolor sit amet consectetur. At mauris pretium id elit maecenas.</h3>
              </Link>
            </Col>
            <Col>
              <Link href="">
                  <Image width={500} height={302} quality={100} src="/assets/images/image.jpg" alt="" />
                  <h3>Quisque pulvinar enim faucibus sociis habitant ac sed elit morbi. Convallis adipiscing lorem.</h3>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogsSection;
