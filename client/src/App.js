import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Match from "./pages/Matches/Match";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/match/:id" element={<Match />} />
      </Routes>
    </Router>
  );
}

export default App;
