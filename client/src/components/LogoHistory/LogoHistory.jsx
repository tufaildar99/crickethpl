// src/components/LogoHistory/LogoHistory.js
import React from "react";
import styles from "./LogoHistory.module.css";
import logo from "../../assets/images/crickethpl.png"; // Adjust the path to your logo

const LogoHistory = () => {
  return (
    <section className={styles.container}>
      <img src={logo} alt="HPL Logo" className={styles.logo} />
      <p className={styles.history}>
        Hathlangoo Premier League is a village-level cricket tournament
        established to bring together cricket lovers from Kashmir. Over the
        years, the tournament has grown to become a much-anticipated event,
        fostering sportsmanship and camaraderie among participating teams. From
        humble beginnings, HPL now hosts several teams, exciting matches, and
        provides a platform for aspiring cricketers to showcase their talents.
      </p>
    </section>
  );
};

export default LogoHistory;
