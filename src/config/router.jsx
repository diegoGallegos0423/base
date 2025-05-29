import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/home/About";
import Dashboard from "../components/dashboar";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRouter;