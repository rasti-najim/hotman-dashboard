import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";

// custom
import logo from "./logo.svg";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Details from "./components/Details";

const GlobalStyle = createGlobalStyle`
  body {
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Nunito', sans-serif;
    background-color: #f7fafc
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <Dashboard />
        <Details />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background-color: #f2f2f2; */
  background-color: #fff;
`;

export default App;
