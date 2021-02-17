import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// custom
import logo from "./logo.svg";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
import SideBar from "./components/SideBar";
import Details from "./components/Details";
import Loading from "./components/Loading";
import Login from "./pages/Login";
// import { Loading } from "@geist-ui/react";
const Overview = React.lazy(() => import("./pages/Overview"));
const Rooms = React.lazy(() => import("./pages/Rooms"));
const Reservations = React.lazy(() => import("./pages/Reservations"));

const GlobalStyle = createGlobalStyle`
  body {
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Nunito', sans-serif;
    /* background-color: #f7fafc; */
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    box-sizing: border-box;
  }
`;

function App() {
  const [loggedIn, setLoggedIn] = useState();
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    const loggedInStatus = window.localStorage.getItem("loggedIn");
    console.log(loggedInStatus);
    loggedInStatus && loggedInStatus == "true"
      ? setLoggedIn(true)
      : setLoggedIn(false);
  }, [loggedIn]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <Switch>
          <Route path="/login">
            {!loggedIn ? (
              <Login setLoggedIn={setLoggedIn} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route>
            {loggedIn ? (
              <>
                <GlobalStyle />
                <Container>
                  <SideBar />
                  <React.Suspense fallback={<Loading />}>
                    <Switch>
                      <Route exact path="/">
                        <Overview toggleTheme={toggleTheme} />
                      </Route>
                      <Route path="/reservations" component={Reservations} />
                      <Route path="/rooms" component={Rooms} />
                    </Switch>
                  </React.Suspense>
                  <Details />
                </Container>
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: #f2f2f2; */
  /* background: #fff; */
`;

export default App;
