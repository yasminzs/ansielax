import React from "react";
import {
  AreaButton,
  AreaTitle,
  AreaWrapper,
  Button,
  Container,
} from "../../Styles/Components/tasks/thirdTask";

export function ThirdTask({ task, setTask, setShowTask }) {
  return (
    <Container>
      <AreaWrapper>
        <AreaTitle>
          <h2>liste mentalmente 4 coisas que você consegue tocar</h2>
        </AreaTitle>
        <p>imagine a sensação de tocá-las</p>

        <img src="/tocar.png" alt="" />

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
              setShowTask(false);
              setTask(0);
            }}
          >
            Finalizar
          </Button>
        </AreaButton>
      </AreaWrapper>
    </Container>
  );
}
