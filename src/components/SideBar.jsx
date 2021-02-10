import styled, { css } from "styled-components";
import {
  FaHome,
  FaCalendarAlt,
  FaBorderAll,
  FaDollyFlatbed,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ScrollLock from "react-scrolllock";

export default function SideBar() {
  return (
    <ScrollLock>
      <Container>
        <Title>New Bussiness</Title>
        <StyledLink exact to="/">
          <StyledFaHome />
          <Text>Overview</Text>
        </StyledLink>
        <StyledLink to="/reservations">
          <StyledFaCalendarAlt />
          <Text>Reservations</Text>
        </StyledLink>
        <StyledLink to="/rooms">
          <StyledFaBorderAll />
          <Text>Rooms</Text>
        </StyledLink>
        <StyledLink to="/inventory">
          <StyledFaDollyFlatbed />
          <Text>Inventory</Text>
        </StyledLink>
      </Container>
    </ScrollLock>
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
  /* #605bff */
  /* #4a30e0 */
  background-color: #f7fafc;
  /* background-color: #ffffff; */
  border-right: solid #f2f2f2;
  border-right-width: 1px;
`;

const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration: inherit;

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
    color: inherit;
    text-decoration: inherit;
    /* background-color: #000; */
  }

  &.active {
    background-color: #536dfe;
    color: inherit;
    text-decoration: inherit;
  }
`;

const Text = styled.p`
  font-size: 14px;
  margin-left: 10px;
  color: #000;
  ${StyledLink}:hover & {
    color: #fff;
  }

  ${StyledLink}.active & {
    color: #fff;
  }
`;

const Title = styled.h5`
  color: #000;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyledFaHome = styled(FaHome)`
  position: relative;
  top: 2px;
  color: "#000";
  ${StyledLink}:hover & {
    color: #fff;
  }

  ${StyledLink}.active & {
    color: #fff;
  }
`;

const StyledFaCalendarAlt = styled(FaCalendarAlt)`
  position: relative;
  top: 2px;
  color: "#000";
  ${StyledLink}:hover & {
    color: #fff;
  }

  ${StyledLink}.active & {
    color: #fff;
  }
`;

const StyledFaBorderAll = styled(FaBorderAll)`
  position: relative;
  top: 2px;
  color: "#000";
  ${StyledLink}:hover & {
    color: #fff;
  }

  ${StyledLink}.active & {
    color: #fff;
  }
`;

const StyledFaDollyFlatbed = styled(FaDollyFlatbed)`
  position: relative;
  top: 2px;
  color: "#000";
  ${StyledLink}:hover & {
    color: #fff;
  }

  ${StyledLink}.active & {
    color: #fff;
  }
`;
