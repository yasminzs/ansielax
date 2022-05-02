import React from "react";
import { Box, Container, Button, Title } from "../../Styles/Components/header";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <img
        src="/ANSIELEX.png"
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />
      <Box>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          <b>home</b>
        </Button>
        <Button
          onClick={() => {
            navigate("/about");
          }}
        >
          <b>ansiedade</b>
        </Button>
        <Button
          onClick={() => {
            navigate("/exercises");
          }}
        >
          <b>exercícios</b>
        </Button>
        <Button
          onClick={() => {
            navigate("/help");
          }}
        >
          <b>ajuda</b>
        </Button>
      </Box>
    </Container>
  );
}
