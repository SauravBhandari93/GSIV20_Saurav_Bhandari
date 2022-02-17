import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Movie from "../Movie/Movie";
import NotFound from "../Elements/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} exact />
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
