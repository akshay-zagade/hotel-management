import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import EnquiryForm from "./components/EnquiryForm";

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
          <EnquiryForm />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
