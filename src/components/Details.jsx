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

export default function Details() {
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
          >
            $1000
          </Frame>
          <p>Revenue</p>
        </Col>
      </Row>
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
