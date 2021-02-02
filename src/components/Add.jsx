import styled, { css } from "styled-components";
import { Frame, Stack } from "framer";
import { motion } from "framer-motion";

export default function Add() {
  return (
    <Stack direction="horizontal">
      <Frame size="100%">Choose Room</Frame>
      <Frame>Guest Information</Frame>
    </Stack>
  );
}
