import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MovieList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  console.log(match)
  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path={`${match.url}/:movieId`} >
        <h3>Chose a movie from the list</h3>
      </Route>
      <Route exact path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
