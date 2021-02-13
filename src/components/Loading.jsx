import styled from "styled-components";
import { motion, Variants } from "framer";

const containerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: { scale: 0 },
  end: { scale: 1 },
};

const circleTransition = {
  duration: 0.6,
  yoyo: Infinity,
  ease: "easeInOut",
};

export default function Loading() {
  return (
    <Container initial="start" animate="end" variants={containerVariants}>
      <Circle variants={circleVariants} transition={circleTransition} />
      <Circle variants={circleVariants} transition={circleTransition} />
      <Circle variants={circleVariants} transition={circleTransition} />
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 4rem;
  height: 4rem;
`;

const Circle = styled(motion.span)`
  display: block;
  width: 1rem;
  height: 1rem;
  background-color: #000;
  border-radius: 0.5rem;
`;
