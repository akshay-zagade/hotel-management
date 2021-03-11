import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import MenuBar from "./MenuBar";

function AppRouter() {
  return (
    <Router>
      <MenuBar />
    </Router>
  );
}

export default AppRouter;
