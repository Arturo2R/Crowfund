import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import P404 from "./pages/404";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <P404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
