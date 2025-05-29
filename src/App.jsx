import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Wrapper from "./components/wrapper/wrapper";
import Router from './config/router'; // Cambia el nombre aquí

function App() {
  return (
    <>
      <Wrapper />
      <AppRouter /> {Router}
    </>
  );
}

export default App;