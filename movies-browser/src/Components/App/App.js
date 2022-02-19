import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Movie from "../Movie/Movie";
import NotFound from "../Elements/NotFound/NotFound";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:movieId" element={<Movie />} exact />
          <Route element={<NotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
