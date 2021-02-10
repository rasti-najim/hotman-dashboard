import styled, { css } from "styled-components";
import { FiHome } from "react-icons/fi";
import {
  FaHome,
  FaCalendarAlt,
  FaBorderAll,
  FaDollyFlatbed,
} from "react-icons/fa";
import { Frame, Stack } from "framer";
import { Row, Col } from "react-bootstrap";
import {
  XYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";

export default function Details() {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];

  return (
    <Container>
      <Title>Today's Activities</Title>
      <Row>
        <Col>
          <Frame
            position="relative"
            // background="#09F"
            background="#536dfe"
            size={50}
            radius="50%"
            color="#fff"
            style={{ marginBottom: "10px" }}
            whileHover={{ scale: 1.2, borderRadius: "20%" }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            5
          </Frame>
          <p>Booked</p>
        </Col>
        <Col>
          <Frame
            position="relative"
            // background="#09F"
            background="#536dfe"
            size={50}
            radius="50%"
            color="#fff"
            style={{ marginBottom: "10px" }}
            whileHover={{ scale: 1.2, borderRadius: "20%" }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            22
          </Frame>
          <p>Guests</p>
        </Col>
        <Col>
          <Frame
            position="relative"
            // background="#09F"
            background="#536dfe"
            size={50}
            radius="50%"
            color="#fff"
            style={{ marginBottom: "10px" }}
            whileHover={{ scale: 1.2, borderRadius: "20%" }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            $1000
          </Frame>
          <p>Revenue</p>
        </Col>
      </Row>
      {/* <XYPlot height={200} width={200}>
        <VerticalBarSeries data={data} color="#000" />
        <XAxis title="X" />
        <YAxis />
      </XYPlot> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 30vw;
  /* background-color: #536dfe; */
  /* #051937 */
  /* #605bff */
  /* #4a30e0 */
  background-color: #f7fafc;
  /* background-color: #ffffff; */
  border-left: solid #f2f2f2;
  border-left-width: 1px;
`;

const Title = styled.h5`
  color: #000;
  margin-top: 30px;
  margin-bottom: 30px;
`;
