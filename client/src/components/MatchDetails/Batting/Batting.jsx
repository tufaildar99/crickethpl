import React from "react";
import styles from "./Batting.module.css";

const BattingScoreCard = ({ scorecard }) => {
  // Dummy data for demonstration
  const batsmen = scorecard;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Batsman</th>
          <th>Runs</th>
          <th>Balls</th>
          <th>Fours</th>
          <th>Sixes</th>
        </tr>
      </thead>
      <tbody>
        {batsmen.map((player, index) => (
          <tr key={index}>
            <td>{player.playerName}</td>
            <td>{player.runs}</td>
            <td>{player.balls}</td>
            <td>{player.fours}</td>
            <td>{player.sixes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BattingScoreCard;
