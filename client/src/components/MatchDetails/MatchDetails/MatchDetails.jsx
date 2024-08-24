import styles from "./MatchDetails.module.css";
import BattingScoreCard from "../Batting/Batting";
import BowlingScoreCard from "../Bowling/Bowling"; // Import the BattingScoreCard component

import React from "react";

const MatchDetails = ({ match }) => {
  const teamA = "Team A";
  const teamB = "Team B";

  return (
    <section className={styles.matchDetailsContainer}>
      <section className={styles.matchDetails}>
        <ul>
          <li>Venue : Sports Stadium Hathlangoo</li>
          <li>
            Toss:
            {`${match.toss} won the toss and chose to ${match.choice} first`}
          </li>
          <li>Result: {match.result}</li>
        </ul>
      </section>

      <div className={styles.scorecardWrapper}>
        <div className={styles.teamSection}>
          <h3>{teamA} Batting</h3>
          <BattingScoreCard team={teamA} />
        </div>
        <div className={styles.teamSection}>
          <h3>{teamB} Bowling</h3>
          <BowlingScoreCard team={teamB} />
        </div>
      </div>

      <div className={styles.scorecardWrapper}>
        <div className={styles.teamSection}>
          <h3>{teamB} Batting</h3>
          <BattingScoreCard team={teamB} />
        </div>
        <div className={styles.teamSection}>
          <h3>{teamA} Bowling</h3>
          <BowlingScoreCard team={teamA} />
        </div>
      </div>
    </section>
  );
};

export default MatchDetails;
