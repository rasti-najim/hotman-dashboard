import styled, { css } from "styled-components";
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useState } from "react";

const variants = {
  selected: { scale: 1.1 },
  unselected: { scale: 1 },
};

export default function SmallRoomCard({ available, occupied, unavailable }) {
  const [selected, setSelected] = useState(false);

  return (
    <Container
      animate={selected ? "selected" : "unselected"}
      variants={variants}
      onClick={() => setSelected(!selected)}

      //   whileHover={{ scale: 1.1 }}
      //   transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <StyledRow>
        <IconContainer>
          <TextContainer>
            <h6>Room</h6>
            <Number>#42</Number>
          </TextContainer>
        </IconContainer>
        <IconContainer>
          <TextContainer>
            <h6>Floor</h6>
            <Number>#5</Number>
          </TextContainer>
        </IconContainer>
        {/* <IconContainer>
          <TextContainer>
            <h6>Status</h6>
            {available ? <Status available>Available</Status> : null}
            {occupied ? <Status occupied>Occupied</Status> : null}
            {unavailable ? <Status unavailable>Unavailable</Status> : null}
          </TextContainer>
        </IconContainer> */}
      </StyledRow>
      <Info>
        <Text>
          <Number>5</Number> <Sub>rooms</Sub>
        </Text>
        <Divider />
        <Text>
          <Number>2</Number> <Sub>bedrooms</Sub>
        </Text>
        <Divider />
        <Text>
          <Number>$100</Number> <Sub>per night</Sub>
        </Text>
      </Info>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 250px;
  border-radius: 15px;

  padding: 15px;
  margin-bottom: 1.2rem;
  margin-top: 1.2rem;

  /* border: solid #e6eaff; */
  border: solid #000;
  border-width: 2px;
  /* box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.4); */

  :hover {
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  /* margin-left: 15px;
  margin-top: 15px; */
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.p`
  line-height: 1.1rem;
`;

const Number = styled.span`
  font-size: 1.2rem;
`;

const Sub = styled.span`
  font-size: 0.6rem;
  /* color: #5c5e62; */
  color: grey;
`;

const Info = styled.section`
  display: flex;
  justify-content: space-around;
  padding-top: 1.2rem;
`;

const Text = styled.p`
  position: relative;
  top: 5px;
`;

const Divider = styled.div`
  width: 1px;
  background-color: #cccccc;
`;

const Status = styled.span`
  /* color: #00bfa6; */

  ${(props) =>
    props.available &&
    css`
      color: #00bfa6;
    `}

  ${(props) =>
    props.occupied &&
    css`
      color: #f9a826;
    `}

    ${(props) =>
    props.unavailable &&
    css`
      color: #ff0033;
    `}
`;
