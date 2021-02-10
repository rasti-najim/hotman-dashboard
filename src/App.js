import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// custom
import logo from "./logo.svg";
import SideBar from "./components/SideBar";
import Overview from "./pages/Overview";
import Details from "./components/Details";
import Rooms from "./pages/Rooms";
import Reservations from "./pages/Reservations";

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
        {/* <Overview /> */}
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/rooms" component={Rooms} />
        </Switch>
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
