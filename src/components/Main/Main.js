import React, { useState, useEffect } from "react";
import "./Main.css";
import GenreView from "../GenreView/GenreView";
import SingleShow from "../SingleShow/SingleShow";
import GridShow from "../GridShow/GridShow";
import { animeGenreCodes, mangaGenreCodes } from "../../data/GenreData";
import {
  Route,
  Redirect,
  Link,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      {/* <Router> */}
      <Switch>
        <Route exact path="/">
          <Redirect to="/anime-genre/all" />
        </Route>
        <Route
          path="/top-anime"
          render={routerProps => <GridShow type="anime" genre="top" />}
        />
        <Route
          path="/top-manga"
          render={routerProps => <GridShow type="manga" genre="top" />}
        />
        <Route
          path="/anime-genre/all"
          render={routerProps => (
            <GenreView type="anime" genreCodes={animeGenreCodes} />
          )}
        />
        <Route
          path="/manga-genre/all"
          render={routerProps => (
            <GenreView type="manga" genreCodes={mangaGenreCodes} />
          )}
        />
        <Route
          path="/anime/id/:id"
          render={routerProps => <SingleShow type="anime" {...routerProps} />}
        />
        <Route
          path="/manga/id/:id"
          render={routerProps => <SingleShow type="manga" {...routerProps} />}
        />
        <Route
          path="/anime-genre/genre/:genre"
          render={routerProps => <GridShow type="anime" {...routerProps} />}
        />
        <Route
          path="/manga-genre/genre/:genre"
          render={routerProps => <GridShow type="manga" {...routerProps} />}
        />
      </Switch>
      {/* </Router> */}
    </div>
  );
}
export default Main;
