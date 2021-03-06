import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import RoomPage from "./components/RoomPage";

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
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
          <RoomPage/>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
