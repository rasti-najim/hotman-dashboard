import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// custom
import Wave from "../components/Wave";
import AnimatedTick from "../components/AnimatedTick";

const variants = {
  normal: { background: "#536dfe" },
  success: { background: "#00BFA6" },
};

const auth = {
  email: "rastirasheed@gmail.com",
  password: "12345678",
};

export default function Login({ setLoggedIn }) {
  const [tapped, setTapped] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  return (
    <Page>
      <Container>
        <Title>Sign in to your account</Title>
        <Label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Email:
            <AnimatedTick tapped={tapped} size={25} />
          </div>
          <Input
            type="text"
            name="email"
            onChange={(event) => {
              console.log(event.target.value);
              setEmail(event.target.value);
            }}
            value={email}
          />
        </Label>
        <Label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Password:
            <AnimatedTick tapped={tapped} size={25} />
          </div>
          <Input
            type="password"
            name="password"
            onChange={(event) => {
              console.log(event.target.value);
              setPassword(event.target.value);
            }}
            value={password}
          />
        </Label>
        <AddButton
          initial="normal"
          animate={tapped ? "success" : "normal"}
          variants={variants}
          onClick={login}
        >
          <span>Sign in</span>
        </AddButton>
      </Container>
      <Wave />
    </Page>
  );

  function login() {
    if (auth.email == email.trim() && auth.password == password) {
      window.localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
      history.push("/");
    }
  }
}

const Page = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  /* background: #f7fafc; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 40vw;
  margin: 0;
  padding: 40px 20px;
  /* background: #fff; */
  background: #f7fafc;
  border-radius: 5px;

  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.4);
`;

const Input = styled.input`
  height: 2.8rem;
  /* width: 80%; */
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: solid #dfe0e4;
  border-width: 1px;
  border-radius: 5px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-size: 0.9rem;
`;

const Title = styled.h4`
  margin-bottom: 2rem;
`;

const AddButton = styled(motion.button)`
  border: 0;
  width: 80%;
  margin-top: 2rem;
  padding: 10px 0px;
  /* background-color: #fbc684; */
  /* background-color: #536dfe; */
  border-radius: 5px;

  span {
    /* font-size: 0.9rem; */
    /* color: #453192; */
    color: #fff;
  }
`;

const Box = styled(motion.div)`
  background: white;
  border-radius: 30px;
  width: 150px;
  height: 150px;
  position: absolute;
  top: calc(50% - 150px / 2);
  left: calc(50% - 150px / 2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
