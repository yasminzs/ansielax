import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, AreaCards, Button } from "../../Styles/Pages/home";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>{/* <h2>O seu site para relaxar</h2> */}</Container>
      <AreaCards>
        <Box>
          <h3>Ansiedade</h3>
          <span>
            Entenda quais são os dintomas fisicos e psicologicos da Ansiedade.
          </span>
          <Button
            onClick={() => {
              navigate("/about");
            }}
          >
            Clique aqui!
          </Button>
        </Box>
        <Box>
          <h3>Exercícios</h3>
          <span>
            Conheça alguns exercicios para e ajudar a controlar os sintomas da
            Ansiedade.
          </span>

          <Button
            onClick={() => {
              navigate("/exercises");
            }}
          >
            Clique aqui!
          </Button>
        </Box>
        <Box>
          <h3>Ajuda</h3>

          <span>
            Canais de Ajuda, onde você consegue encontrar tratamento gratuito
            para te ajudar a cuidar da sua saúde mental.
          </span>
          <Button
            onClick={() => {
              navigate("/help");
            }}
          >
            Clique aqui!
          </Button>
        </Box>
      </AreaCards>
    </>
  );
};

export default Home;
