// src/components/ScoreCard/BowlingScoreCard.js

import React from "react";
import styles from "./Bowling.module.css";

const BowlingScoreCard = ({ team }) => {
  // Dummy data for demonstration
  const bowlers = [
    { name: "Bowler 1", overs: 4, runs: 30, wickets: 2 },
    { name: "Bowler 2", overs: 4, runs: 25, wickets: 1 },
    // Add more bowlers
  ];

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Bowler</th>
          <th>Overs</th>
          <th>Runs</th>
          <th>Wickets</th>
        </tr>
      </thead>
      <tbody>
        {bowlers.map((player, index) => (
          <tr key={index}>
            <td>{player.name}</td>
            <td>{player.overs}</td>
            <td>{player.runs}</td>
            <td>{player.wickets}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BowlingScoreCard;
