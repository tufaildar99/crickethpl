import React from "react";
import styles from "./Batting.module.css";

const BattingScoreCard = ({ team }) => {
  // Dummy data for demonstration
  const batsmen = [
    { name: "Batsman 1", runs: 45, balls: 30, fours: 5, sixes: 2 },
    { name: "Batsman 2", runs: 33, balls: 22, fours: 4, sixes: 1 },
    // Add more players
  ];

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
            <td>{player.name}</td>
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
