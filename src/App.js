import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

// custom
import logo from "./logo.svg";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Container>
      <SideBar />
      <Dashboard />
    </Container>
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
