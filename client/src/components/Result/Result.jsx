// src/components/Results/Results.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Result.module.css";

const Results = ({ results }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Match Results</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Match</th>
            <th>Result</th>
            <th>Man of the Match</th>
          </tr>
        </thead>
        <tbody>
          {results.map((match, index) => (
            <tr key={index}>
              <td>
                <Link to={`/match/${match.id}`} className={styles.link}>
                  {match.matchName}
                </Link>
              </td>
              <td>{match.result}</td>
              <td>{match.manOfTheMatch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Results;
