import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LogoHistory from "../../components/LogoHistory/LogoHistory";
import Fixture from "../../components/Fixture/Fixture";
import Result from "../../components/Result/Result";
import News from "../../components/News/News";
import Gallery from "../../components/Gallery/Gallery";
import SportsCouncil from "../../components/SportsCouncil/SportsCouncil";
import Register from "../../components/Registration/Register";

import Broadcasting from "../../components/Broadcasting/Broadcasting";

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
    teamA: "Kashmir Riders",
    teamB: "Sopore Strikers",
    toss: "Kashmir Riders",
    choice: "bat", // What the team chose after winning the toss
    teamAScore: {
      runs: 150,
      wickets: 5,
      overs: 20,
      batting: [
        { playerName: "Player A1", runs: 45, balls: 30, fours: 3, sixes: 1 },
        { playerName: "Player A2", runs: 55, balls: 40, fours: 3, sixes: 1 },
        // Add other players...
      ],
      bowling: [
        { playerName: "Player B1", wickets: 2, runsConceded: 30, overs: 4 },
        { playerName: "Player B2", wickets: 1, runsConceded: 25, overs: 4 },
        // Add other bowlers...
      ],
    },
    teamBScore: {
      runs: 148,
      wickets: 8,
      overs: 20,
      batting: [
        { playerName: "Player B1", runs: 60, balls: 50, fours: 2, sixes: 1 },
        { playerName: "Player B2", runs: 30, balls: 20, fours: 2, sixes: 1 },
        // Add other players...
      ],
      bowling: [
        { playerName: "Player A1", wickets: 3, runsConceded: 35, overs: 4 },
        { playerName: "Player A2", wickets: 2, runsConceded: 28, overs: 4 },
        // Add other bowlers...
      ],
    },
    extras: {
      wides: 2,
      noBalls: 1,
      legByes: 5,
    },
  },
  {
    id: 2,
    matchName: "Team C vs Team D",
    result: "Team C won by 20 runs",
    manOfTheMatch: "Player Y",
    teamA: "Team C",
    teamB: "Team D",
    toss: "Team D",
    choice: "field",
    teamAScore: {
      runs: 180,
      wickets: 6,
      overs: 20,
      batting: [
        { playerName: "Player C1", runs: 70, balls: 45, fours: 2, sixes: 1 },
        { playerName: "Player C2", runs: 50, balls: 30, fours: 2, sixes: 1 },
        // Add other players...
      ],
      bowling: [
        {
          playerName: "Player D1",
          wickets: 2,
          runsConceded: 40,
          overs: 4,
        },
        // Add other bowlers...
      ],
    },
    teamBScore: {
      runs: 160,
      wickets: 9,
      overs: 20,
      batting: [
        { playerName: "Player D1", runs: 55, balls: 35 },
        { playerName: "Player D2", runs: 40, balls: 30 },
        // Add other players...
      ],
      bowling: [
        { playerName: "Player C1", wickets: 3, runsConceded: 25, overs: 4 },
        // Add other bowlers...
      ],
    },
    extras: {
      wides: 3,
      noBalls: 0,
      legByes: 2,
    },
  },
  // Add more matches as needed...
];

const news = [
  {
    title: "HPL 2024 Begins with a Thrilling Match",
    description:
      "The first match of the HPL 2024 saw a nail-biting finish as Team A edged out Team B by 5 wickets.",
    link: "https://example.com/news1",
  },
  {
    title: "Team C Dominates Team D in a One-Sided Contest",
    description:
      "Team C showcased their dominance with a comprehensive victory over Team D in today’s match.",
    link: "https://example.com/news2",
  },
  {
    title: "Player X Scores a Century in a Crucial Knock",
    description:
      "Player X played a match-winning knock, scoring 100 runs off 85 balls in a thrilling encounter.",
    link: "https://example.com/news3",
  },
];

const images = [
  { src: require("../../assets/images/Gallery01.png"), alt: "Image 1" },
  { src: require("../../assets/images/Gallery02.png"), alt: "Image 2" },
  { src: require("../../assets/images/Gallery02.png"), alt: "Image 2" },
];

const Home = () => {
  return (
    <>
      <Header />
      <LogoHistory />
      <Register />
      <Fixture fixtures={fixtures} />
      <Result results={results} />
      <News newsItems={news} />
      <Gallery images={images} />
      <Broadcasting />
      <SportsCouncil />
      <Footer />
    </>
  );
};

export default Home;
