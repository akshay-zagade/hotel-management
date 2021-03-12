import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import AppRouter from "./components/AppRouter";
import { Provider } from "react-redux";
import store from "./redux/store";

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <div className="App">
            <AppRouter />
          </div>
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
