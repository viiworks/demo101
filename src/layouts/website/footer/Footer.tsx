
"use client"
import { Row, Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import styles from "./Footer.module.scss";
import Image from 'next/image';
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className={styles["footer"]}>
        <div className={styles["top-footer"]}>
          <Container fluid="xl">
            <Row lg={3} md={3} sm={1} xs={1}>
              <Col>
                <Image src="/assets/images/hoteller-logo.png" width={230} height={26} alt=""/>
              </Col>
              <Col>
                <h5><strong>QUICK LINKS</strong></h5> 
                <ul className={styles["quick-links"]}>
                  <li><Link href="">Home</Link></li>
                  <li><Link href="">About</Link></li>
                  <li><Link href="">Our rooms</Link></li>
                  <li><Link href="">Book now</Link></li>
                </ul>
              </Col>
              <Col>
                <h5>Subscribe To Our Newsletter</h5>
                <Form className={styles["newsletter-form"]}>
                <FormGroup> 
                  <Input
                    className='rounded-0'
                    id="Newsletter"
                    name="email"
                    placeholder="Enter your Email"
                    type="email"
                  />
                </FormGroup>
                <Button className='rounded-0'>Subscribe</Button>
                </Form>
              </Col>
            </Row>
          </Container>  
        </div>
        <div className={styles["bottom-footer"]}>
          <Container fluid="lg">  
            <hr />
            <Row lg={2} md={1} sm={1} xs={1}>
              <Col>© 2024 Inc. All Rights Reserved | <Link href="">Terms & Conditions</Link></Col>
              <Col><p className={styles["designed-viiworks"]}>Designed by<Link href="www.viiworks.com">Viiworks</Link></p></Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;

