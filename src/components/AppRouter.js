import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from "./MenuBar";
import ScrollToTop from "./ScrollToTop";

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <MenuBar />
    </Router>
  );
}

export default AppRouter;
