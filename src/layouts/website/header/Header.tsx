"use client";

import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import styles from "./Header.module.scss";
import Image from 'next/image';

import Link from 'next/link';
import clsx from 'clsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar className={`${styles.header} ${scrolling ? styles.scrolled : ""}`} expand="md" fixed="top" container="xl">
        <NavbarToggler className={styles["toggle-menu"]} onClick={toggle} />
        <Collapse isOpen={isOpen} className="col-lg-4" navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/our-story">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/our-services">Our Rooms</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <div className="col-lg-4 text-center">
          <NavbarBrand className='text-white' href="/"><Image src="/assets/images/hoteller-logo-white.png" width={230} height={25} alt="viiworks logo" /></NavbarBrand>
        </div>
        <div className={clsx("col-lg-4",styles["end-nav"])}>
          <Link href="">Login</Link>
          <button className="btn btn-md book">Contact us</button>
        </div>
      </Navbar>
    </>
  );
};

export default Header;

