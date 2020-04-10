import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CheckIn from "./pages/checkin.js";
import Home from "./pages/home.js";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/checkin/:placeID" exact>
          <CheckIn />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route>
          <React.Fragment>
            <h1>Page not found</h1>
          </React.Fragment>
        </Route>
      </Switch>
    </Router>
  );
}
