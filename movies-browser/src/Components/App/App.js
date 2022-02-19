import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Movie from "../Movie/Movie";
import NotFound from "../Elements/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter basename="/ReactMovieDB">
      <React.Fragment>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
