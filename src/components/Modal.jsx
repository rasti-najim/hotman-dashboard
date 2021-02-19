import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: { y: "200px", opacity: 1, transition: { delay: 0.1 } },
  exit: { opacity: 0 },
};

export default function Modal({ showModal, setShowModal, children }) {
  return (
    <AnimatePresence>
      {showModal && (
        <Backdrop
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ClickAwayListener onClickAway={() => setShowModal(false)}>
            <Container variants={modal}>{children}</Container>
          </ClickAwayListener>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Container = styled(motion.div)`
  height: auto;
  max-width: 50vw;
  margin: 0 auto;
  padding: 40px 20px;
  background: ${({ theme }) => (theme.mode == "light" ? "#fff" : "#1d1d1f")};
  border-radius: 10px;
  text-align: center;
`;

const Button = styled(motion.button)`
  border: 2px solid;
  padding: 5px 20px;
  background-color: #536dfe;
  /* background-color: #5469d4; */
  /* background-color: #1899ff; */
  /* background-color: #000; */
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;
