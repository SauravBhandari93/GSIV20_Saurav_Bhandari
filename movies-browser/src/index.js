import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename="/ReacMovieDB">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);