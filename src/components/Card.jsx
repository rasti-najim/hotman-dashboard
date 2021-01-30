import styled, { css } from "styled-components";
import { FaPlaneArrival } from "react-icons/fa";

export default function Card() {
  return (
    <Container>
      <IconContainer>
        <h5>
          <FaPlaneArrival />
          Arrivals
        </h5>
      </IconContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 30vh;
  width: 30vh;
  background-color: #fff;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-left: 15px;
`;
