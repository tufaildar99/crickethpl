// src/components/BroadcastingSponsorship/BroadcastingSponsorship.js
import React from "react";
import styles from "./Broadcasting.module.css";

const Broadcasting = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Broadcasting & Sponsorship</h2>
      <p className={styles.description}>
        The HPL Cricket Tournament has secured exclusive broadcasting and
        sponsorship rights with renowned companies. The tournament will be
        broadcast live on various television networks and online platforms,
        providing a wide audience with an opportunity to follow the games. Our
        valued sponsors are committed to supporting the event, helping us ensure
        that the HPL remains a premier cricket event for years to come.
      </p>
    </section>
  );
};

export default Broadcasting;
