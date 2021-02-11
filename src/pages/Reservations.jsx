import { useState, useEffect } from "react";
import styled from "styled-components";

// custom
import Table from "../components/Table";
import BarChart from "../components/BarChart";

export default function Reservations() {
  return (
    <Container>
      <h1>Reservations</h1>
      <BarChart />
      {/* <Table /> */}
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
