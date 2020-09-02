import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import PersonsPage from "./Pages/PersonsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/persons">
          <PersonsPage />
        </Route>
        <Route path="*">
          <div>Path error: 404</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
