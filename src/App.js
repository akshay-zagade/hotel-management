import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import EnquiryMain from "./components/EnquiryMain";

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "light",
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <EnquiryMain />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
