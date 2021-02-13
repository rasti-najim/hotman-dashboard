import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// custom
import logo from "./logo.svg";
import SideBar from "./components/SideBar";
import Details from "./components/Details";
import Loading from "./components/Loading";
// import { Loading } from "@geist-ui/react";
const Overview = React.lazy(() => import("./pages/Overview"));
const Rooms = React.lazy(() => import("./pages/Rooms"));
const Reservations = React.lazy(() => import("./pages/Reservations"));

const GlobalStyle = createGlobalStyle`
  body {
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Nunito', sans-serif;
    /* background-color: #f7fafc; */
    background-color: #fff;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <SideBar />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Overview} />
            <Route path="/reservations" component={Reservations} />
            <Route path="/rooms" component={Rooms} />
          </Switch>
        </React.Suspense>
        <Details />
      </Container>
    </Router>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: #f2f2f2; */
  background-color: #fff;
`;

export default App;
