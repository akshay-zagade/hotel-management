import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import AppRouter from "./components/AppRouter";

function App(props) {
  const theme = createMuiTheme({
    palette: {
      type: props.themeType,
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
          <AppRouter />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    themeType: state.theme.type,
  };
};

export default connect(mapStateToProps)(App);
