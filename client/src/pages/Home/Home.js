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

const councilMembers = [
  {
    name: "John Doe",
    position: "President",
    photo: require("../../assets/images/member1.jpg"),
  },
  {
    name: "Jane Smith",
    position: "Vice President",
    photo: require("../../assets/images/member2.jpg"),
  },
  {
    name: "Richard Roe",
    position: "General Secretary",
    photo: require("../../assets/images/member3.jpg"),
  },
  {
    name: "Emily Davis",
    position: "Treasurer",
    photo: require("../../assets/images/member1.jpg"),
  },
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
      <SportsCouncil councilMembers={councilMembers} />
      <Footer />
    </>
  );
};

export default Home;
