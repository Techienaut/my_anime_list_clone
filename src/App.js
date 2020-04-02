import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {
  Route,
  Redirect,
  Link,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;
