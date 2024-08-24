import React from "react";
import Header from "../components/Header/Header";
import MatchDetails from "../components/MatchDetails/MatchDetails"; // Result component will be built separately
import Footer from "../components/Footer/Footer";
const Match = () => {
  return (
    <>
      <Header />
      <MatchDetails />
      <Footer />
    </>
  );
};
export default Match;
