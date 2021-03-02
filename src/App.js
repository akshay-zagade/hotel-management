import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";

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
          <h1>Hotel Management</h1>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
