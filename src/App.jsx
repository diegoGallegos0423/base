import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import AppRouter from "./config/router";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;