import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";

// custom
import RoomCard from "../components/RoomCard";

export default function Rooms() {
  return (
    <Container>
      <h1>Rooms</h1>
      <StyledRow>
        <RoomCard available />
        <RoomCard occupied />
        <RoomCard unavailable />
        <RoomCard available />
        <RoomCard available />
        <RoomCard available />
        <RoomCard available />
        <RoomCard available />
        <RoomCard available />
      </StyledRow>
    </Container>
  );
}

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  padding-left: 30px;
  padding-right: 30px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const StyledRow = styled(Row)`
  display: flex;
  justify-content: space-between;
`;
