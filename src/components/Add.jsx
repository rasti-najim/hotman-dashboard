import styled, { css } from "styled-components";
import { Frame, Stack } from "framer";
import { motion } from "framer-motion";
import { MdClear } from "react-icons/md";

// custom
import SmallRoomCard from "./SmallRoomCard";
import { useToasts } from "@geist-ui/react";

export default function Add({ setShowModal }) {
  const [toasts, setToast] = useToasts();

  return (
    <Container>
      <Left>
        <h6>Available rooms</h6>
        <Scroll>
          <SmallRoomCard />
          <SmallRoomCard />
          <SmallRoomCard />
          <SmallRoomCard />
          <SmallRoomCard />
          <SmallRoomCard />
          <SmallRoomCard />
          <SmallRoomCard />
          <SmallRoomCard />
          <SmallRoomCard />
          <SmallRoomCard />
          <SmallRoomCard />
        </Scroll>
      </Left>
      <Right>
        <h6>Add Guest</h6>
        <Input placeholder="Name" />
        <Input placeholder="Name" />
        <Input placeholder="Name" />
        <AddButton
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            setShowModal(false);
            setTimeout(
              () => setToast({ text: "Guest added successfully." }),
              1000
            );
          }}
        >
          <span>Add Guest</span>
        </AddButton>
      </Right>
      <h4>
        <StyledIcon
          onClick={() => {
            setShowModal(false);
          }}
        />
      </h4>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;

  /* background: #000; */
`;

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 300px;
  overflow-y: scroll;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  background: #fff;
  margin-left: 1.5rem;
`;

const Input = styled.input`
  width: 80%;
  margin-top: 1.2rem;
  border: solid #b8afd0;
  border-width: 2px;
  border-radius: 5px;
`;

const AddButton = styled(motion.button)`
  border: 0;
  width: 80%;
  margin-top: 2rem;
  padding: 5px 0px;
  background-color: #fbc684;
  border-radius: 5px;

  span {
    font-size: 0.9rem;
    color: #453192;
  }
`;

const StyledIcon = styled(MdClear)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;

  :hover {
    cursor: pointer;
  }
`;
