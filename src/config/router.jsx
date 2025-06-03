import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Dashboard from "../components/Perfil/Dashboard";
import DashboardPromo from "../components/Perfil/DashboardPromo";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/promocion" element={<DashboardPromo/>} />
    </Routes>
  );
}

export default AppRouter;