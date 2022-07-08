import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import { Route, useParams, Routes, BrowserRouter } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import FooterBar from "./components/FooterBar";
import NoScreen from "./screens/NoScreen";
import SingleProductScreen from "./screens/SingleProductScreen";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Hello React!</h1>
        <FooterBar />
      </div>
    );
  }
}

export default App;
