import styled, { css } from "styled-components";
import { FaPlaneArrival } from "react-icons/fa";
import { Frame, Stack } from "framer";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ showModal, setShowModal, children }) {
  return (
    <AnimatePresence>
      {showModal && (
        <Frame
          center
          size={500}
          background="#fff"
          border="2px solid #000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ zIndex: 100 }}
        >
          {children}
        </Frame>
      )}
    </AnimatePresence>
  );
}
