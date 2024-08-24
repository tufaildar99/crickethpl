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
          {results.map((result, index) => (
            <tr key={index}>
              <td>
                <Link to={`/results/${result.id}`} className={styles.link}>
                  {result.matchName}
                </Link>
              </td>
              <td>{result.result}</td>
              <td>{result.manOfTheMatch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Results;
