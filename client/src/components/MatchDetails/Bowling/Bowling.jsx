// src/components/ScoreCard/BowlingScoreCard.js

import React from "react";
import styles from "./Bowling.module.css";

const BowlingScoreCard = ({ scorecard }) => {
  // Dummy data for demonstration
  const bowlers = scorecard;

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
            <td>{player.playerName}</td>
            <td>{player.overs}</td>
            <td>{player.runsConceded}</td>
            <td>{player.wickets}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BowlingScoreCard;
