import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header/Header";
import MatchDetails from "../../components/MatchDetails/MatchDetails/MatchDetails"; // Result component will be built separately
import Footer from "../../components/Footer/Footer";
const Match = () => {
  const location = useLocation();
  const { match } = location.state || {}; // Extract result object from location state

  return (
    <>
      <Header />
      {match ? (
        <MatchDetails match={match} />
      ) : (
        <p>No match details available</p>
      )}
      <Footer />
    </>
  );
};
export default Match;
