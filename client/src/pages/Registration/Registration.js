// src/pages/RegistrationPage.js
import React from "react";
import Header from "../../components/Header/Header";
import RegistrationForm from "../../components/Registration/RegistrationForm";
import SportsCouncil from "../../components/SportsCouncil/SportsCouncil";
import Footer from "../../components/Footer/Footer";

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

const Registration = () => {
  return (
    <div>
      <Header />
      <RegistrationForm />
      <SportsCouncil councilMembers={councilMembers} />
      <Footer />
    </div>
  );
};

export default Registration;
