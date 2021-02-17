import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  hovered: { opacity: 0.3 },
  unhovered: { opacity: 1 },
};

const button = {
  show: { opacity: 1 },
  hide: { opacity: 0 },
};

export default function RoomCard({ available, occupied, unavailable }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Container
      // whileHover={{ scale: 1.1 }}
      // transition={{ ease: "easeOut", duration: 0.3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <StyledRow>
        <IconContainer>
          <TextContainer>
            <h5>Room</h5>
            <Number>#42</Number>
          </TextContainer>
        </IconContainer>
        <IconContainer>
          <TextContainer>
            <h5>Floor</h5>
            <Number>#5</Number>
          </TextContainer>
        </IconContainer>
        <IconContainer>
          <TextContainer>
            <h5>Status</h5>
            {available ? <Status available>Available</Status> : null}
            {occupied ? <Status occupied>Occupied</Status> : null}
            {unavailable ? <Status unavailable>Unavailable</Status> : null}
          </TextContainer>
        </IconContainer>
      </StyledRow>
      <Opacity>
        <Info animate={hovered ? "hovered" : "unhovered"} variants={variants}>
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
        <Button
          animate={hovered ? "show" : "hide"}
          variants={button}
          whileHover={{
            backgroundColor: "#000",
            color: "#fff",
            transition: { duration: 0.1 },
          }}
        >
          Change Status
        </Button>
      </Opacity>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* height: 350px; */
  height: 200px;
  width: 350px;
  border-radius: 15px;

  padding: 15px;
  margin-bottom: 1.2rem;
  margin-top: 1.2rem;

  /* border: solid #e6eaff; */
  border: solid;
  border-color: ${({ theme }) => theme.text};
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
  line-height: 1.2rem;
`;

const Number = styled.span`
  font-size: 1.5rem;
`;

const Sub = styled.span`
  /* color: #5c5e62; */
  color: grey;
`;

const Info = styled(motion.section)`
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

const Opacity = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Button = styled(motion.button)`
  width: 80%;
  border: 2px solid;
  padding: 5px 20px;
  background-color: #fff;
  /* background-color: #5469d4; */
  /* background-color: #1899ff; */
  color: #000;
  border-radius: 5px;

  position: absolute;
  top: 20px;
  left: 40px;
  /* right: 0; */
  z-index: 10;
`;
