import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import AppRouter from "./components/AppRouter";

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: "#6d716b",
      },
      secondary: {
        main: "#e4beb6",
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <AppRouter/>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
