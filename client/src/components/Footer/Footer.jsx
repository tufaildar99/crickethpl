// src/components/Footer/Footer.js
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className={`fab fa-facebook ${styles.icon}`}></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className={`fab fa-twitter ${styles.icon}`}></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className={`fab fa-instagram ${styles.icon}`}></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <i className={`fab fa-youtube ${styles.icon}`}></i>
          </a>
        </div>

        <div className={styles.contact}>
          <p>Contact: info@hpl.com | +123 456 7890</p>
        </div>

        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} HPL Cricket Tournament. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
