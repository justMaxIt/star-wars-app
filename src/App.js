import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import PersonsPage from "./Pages/PersonsPage";
import PlanetsPage from "./Pages/PlanetsPage";
import Menu from "./Elements/Menu";
import PlanetsPageSearch from "./Pages/PlanetsPageSearch";
import VehiclesPage from "./Pages/VehiclesPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Menu />
          <MainPage />
        </Route>
        <Route path="/persons">
          <Menu />
          <PersonsPage />
        </Route>
        <Route path="/planets">
          <Menu />
          <PlanetsPage />
        </Route>
        <Route path="/planetsSearch">
          <Menu />
          <PlanetsPageSearch />
        </Route>
        <Route path="/vehicles">
          <Menu />
          <VehiclesPage />
        </Route>
        <Route path="*">
          <Menu />
          <div>Path error: 404</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
