import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import AppRouter from "./components/AppRouter";
import EnquiryForm from "./components/EnquiryForm";

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
          {/* <AppRouter/> */}
          <EnquiryForm />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
