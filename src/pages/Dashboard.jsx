import { Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import { FaPlus } from "react-icons/fa";

// custom
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <Container>
      <h1>Dashboard</h1>
      <CardsContainer>
        <Card />
        <Card />
        <Card />
      </CardsContainer>
      <ReservationsContainer>
        <h6>Reservations</h6>
        <SearchBox placeholder="Search name, room, or id" />
        <Button>
          <StyledFaPlus />
          Add
        </Button>
      </ReservationsContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 90vh;
  width: 90vw;
  margin-left: 30px;
`;

const CardsContainer = styled(Row)`
  justify-content: space-around;
`;

const ReservationsContainer = styled(Row)`
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`;

const Button = styled.button`
  border: 2px solid;
  padding: 5px 20px;
  background-color: #536dfe;
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;

  :hover {
    transform: scale(1.1, 1.1);
  }
`;

const SearchBox = styled.input`
  width: 30vw;
  border-width: 0px;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
`;

const StyledFaPlus = styled(FaPlus)`
  padding-right: 5px;
`;

const Liquid = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: #536dfe;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;

  :before,
  :after {
    content: "";
    position: absolute;
    top: 0;
    width: 200%;
    height: 200%;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  :before {
    border-radius: 45%;
    background: #141414;
  }

  :after {
    border-radius: 40%;
    background: rgba(20, 20, 20, 0.5);
  }
`;
