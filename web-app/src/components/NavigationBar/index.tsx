import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { PathE } from "../../utils/constants";

import styles from "./index.module.scss";

const NavigationBar = () => {
  return (
    <Navbar className={styles.background} expand="lg">
      <Navbar.Brand className={styles.brand}>Movies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link className={styles.text} to={PathE.Logout}>
            Log out
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
