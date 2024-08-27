import React from "react";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Cursor from "./Components/cursor/Cursor";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Works from "./Pages/Works/Works";

const App = () => {
  return (
    <div>
      <Cursor />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
