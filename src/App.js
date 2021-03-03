import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import MenuBar from "./components/MenuBar";
import AppBarOne from './components/Appbar'

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "light",
      primary:{
        main:"#6d716b"
      }
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          {/* <h1>Hotel Management</h1> */}
          <MenuBar/>
          {/* <AppBarOne/> */}
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
