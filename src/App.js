import React from "react";
import Navigation from "./components/Navigation";
import "./App.css";
// Write imports for Router & BrowserRouter here //
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navigation />
      <Router />
    </>
  );
}

export default App;
