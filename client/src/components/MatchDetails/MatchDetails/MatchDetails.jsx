// src/pages/MatchDetails.js

import React from "react";
import { useParams } from "react-router-dom";

const MatchDetails = () => {
  const { id } = useParams();

  // Fetch or retrieve the match details based on the `id` here
  // For now, let's just show a placeholder
  return (
    <div>
      <h2>Match Details for Match ID: {id}</h2>
      {/* Display match details like scorecards, etc. */}
    </div>
  );
};

export default MatchDetails;
