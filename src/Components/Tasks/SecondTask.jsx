import React from "react";
import {
  AreaButton,
  AreaTitle,
  AreaWrapper,
  Button,
  Container,
} from "../../Styles/Components/tasks/secondTask";

export function SecundaryTask({ setTask, task }) {
  return (
    <Container> 
      <AreaWrapper>
      <AreaTitle>
        <h2>Observe o ambiente a sua volta</h2>
      </AreaTitle>
        <p> Liste mentalmente 5 coisas que você consegue enxergar.</p>
        <img src="/coisas-enxergar.png" alt="Imagem pentagono de olhos" />
        <br />
        <AreaButton>
          <Button
            onClick={() => {
              setTask(task - 1);
            }}
          >
            Exercicio anterior
          </Button>
          <Button
            onClick={() => {
              setTask(task + 1);
            }}
          >
            Proximo exercicio
          </Button>
        </AreaButton>
      </AreaWrapper>
    </Container>
  );
}
