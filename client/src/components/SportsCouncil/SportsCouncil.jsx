// src/components/SportsCouncil/SportsCouncil.js
import React from "react";
import styles from "./SportsCouncil.module.css";

const councilMembers = [
  {
    name: "John Doe",
    position: "President",
    photo: require("../../assets/images/member1.jpg"),
  },
  {
    name: "Jane Smith",
    position: "Vice President",
    photo: require("../../assets/images/member2.jpg"),
  },
  {
    name: "Richard Roe",
    position: "General Secretary",
    photo: require("../../assets/images/member3.jpg"),
  },
  {
    name: "Emily Davis",
    position: "Treasurer",
    photo: require("../../assets/images/member1.jpg"),
  },
];

const SportsCouncil = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Sports Council</h2>
      <div className={styles.cardsContainer}>
        {councilMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <img
              src={member.photo}
              alt={member.name}
              className={styles.photo}
            />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.position}>{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SportsCouncil;
