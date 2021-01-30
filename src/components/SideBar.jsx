import styled, { css } from "styled-components";
import { FiHome } from "react-icons/fi";
import {
  FaHome,
  FaCalendarAlt,
  FaBorderAll,
  FaDollyFlatbed,
} from "react-icons/fa";

export default function SideBar() {
  return (
    <Container>
      <IconContainer title>
        <Title>New Bussiness</Title>
      </IconContainer>
      <IconContainer selected>
        <StyledFaHome />
        <Text>Dashboard</Text>
      </IconContainer>
      <IconContainer>
        <StyledFaCalendarAlt />
        <Text>Reservations</Text>
      </IconContainer>
      <IconContainer>
        <StyledFaBorderAll />
        <Text>Rooms</Text>
      </IconContainer>
      <IconContainer>
        <StyledFaDollyFlatbed />
        <Text>Inventory</Text>
      </IconContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 20vw;
  /* background-color: #536dfe; */
  /* #051937 */
  background-color: #ffffff;
  border-right: solid #f2f2f2;
  border-right-width: 1px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding-left: 15px;
  padding-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: #536dfe;
    /* background-color: #ffffff; */
    /* background-image: linear-gradient(to right, #536dfe, #833fca); */
  }

  ${(props) =>
    props.title &&
    css`
      margin-bottom: 30px;
      margin-top: 15px;

      :hover {
        background-color: #fff;
      }
    `}
`;

const Text = styled.p`
  font-size: 14px;
  margin-left: 10px;
  color: #000;

  ${IconContainer}:hover & {
    color: #fff;
  }
`;

const Title = styled.h5`
  color: #000;
`;

const StyledFaHome = styled(FaHome)`
  color: "#000";
  ${IconContainer}:hover & {
    color: #fff;
  }
`;

const StyledFaCalendarAlt = styled(FaCalendarAlt)`
  color: "#000";
  ${IconContainer}:hover & {
    color: #fff;
  }
`;

const StyledFaBorderAll = styled(FaBorderAll)`
  color: "#000";
  ${IconContainer}:hover & {
    color: #fff;
  }
`;

const StyledFaDollyFlatbed = styled(FaDollyFlatbed)`
  color: "#000";
  ${IconContainer}:hover & {
    color: #fff;
  }
`;
