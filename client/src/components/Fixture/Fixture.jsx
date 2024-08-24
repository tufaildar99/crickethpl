// src/components/Fixtures/Fixtures.js
import React from "react";
import styles from "./Fixture.module.css";

const Fixtures = ({ fixtures }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Upcoming Fixtures</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Team A</th>
            <th>Team B</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map((fixture, index) => (
            <tr key={index}>
              <td>{fixture.teamA}</td>
              <td>{fixture.teamB}</td>
              <td>{fixture.dateTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Fixtures;
