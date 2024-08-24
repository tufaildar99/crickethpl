import styles from "./MatchDetails.module.css";
import BattingScoreCard from "../Batting/Batting";
import BowlingScoreCard from "../Bowling/Bowling";
import React from "react";

const MatchDetails = ({ match }) => {
  const { teamAScore, teamBScore } = match;

  return (
    <section className={styles.matchDetailsContainer}>
      <section className={styles.matchDetails}>
        <ul>
          <li>Venue: Sports Stadium Hathlangoo</li>
          <li>
            Toss:{" "}
            {`${match.toss} won the toss and chose to ${match.choice} first`}
          </li>
          <li>Result: {match.result}</li>
        </ul>
      </section>

      <div className={styles.scorecardContainer}>
        <div className={styles.teamSection}>
          <h3>{match.teamA} Batting</h3>
          <p>{`Runs: ${teamAScore.runs}, Wickets: ${teamAScore.wickets}, Overs: ${teamAScore.overs}`}</p>
          <BattingScoreCard scorecard={teamAScore.batting} />
        </div>
        <div className={styles.teamSection}>
          <h3>{match.teamB} Bowling</h3>
          <BowlingScoreCard scorecard={teamBScore.bowling} />
        </div>
      </div>

      <div className={styles.scorecardContainer}>
        {/* Team B Batting - Team A Bowling */}
        <div className={styles.teamSection}>
          <h3>{match.teamB} Batting</h3>
          <p>{`Runs: ${teamBScore.runs}, Wickets: ${teamBScore.wickets}, Overs: ${teamBScore.overs}`}</p>
          <BattingScoreCard scorecard={teamBScore.batting} />
        </div>
        <div className={styles.teamSection}>
          <h3>{match.teamA} Bowling</h3>
          <BowlingScoreCard scorecard={teamAScore.bowling} />
        </div>
      </div>
    </section>
  );
};

export default MatchDetails;
