import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LogoHistory from "../../components/LogoHistory/LogoHistory";
import Fixture from "../../components/Fixture/Fixture";
import Result from "../../components/Result/Result";

const fixtures = [
  { teamA: "Kashmir Reds", teamB: "Kashmir Blues", dateTime: "28 June 2023" },
  { teamA: "Kashmir Reds", teamB: "Kashmir Blues", dateTime: "28 June 2023" },
  { teamA: "Kashmir Reds", teamB: "Kashmir Blues", dateTime: "28 June 2023" },
];

const results = [
  {
    id: 1,
    matchName: "Team A vs Team B",
    result: "Team A won by 5 wickets",
    manOfTheMatch: "Player X",
  },
  {
    id: 2,
    matchName: "Team C vs Team D",
    result: "Team C won by 20 runs",
    manOfTheMatch: "Player Y",
  },
  {
    id: 3,
    matchName: "Team E vs Team F",
    result: "Match tied",
    manOfTheMatch: "Player Z",
  },
  {
    id: 4,
    matchName: "Team G vs Team H",
    result: "Team H won by 8 wickets",
    manOfTheMatch: "Player A",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <LogoHistory />
      <Fixture fixtures={fixtures} />
      <Result results={results} />
      <Footer />
    </>
  );
};

export default Home;
