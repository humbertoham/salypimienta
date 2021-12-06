import React from "react";
import Foot from "./components/Foot";
import Home from "./components/Home";

import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./components/MenuPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<MenuPage />} />
      </Routes>
      <Foot />
      <GlobalStyle />
    </Router>
  );
}

export default App;
