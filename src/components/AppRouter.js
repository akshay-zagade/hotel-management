import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MenuBar from "./MenuBar";
import ScrollToTop from "./ScrollToTop";

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route
          exact
          path="/:page?"
          render={(props) => <MenuBar {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default AppRouter;
