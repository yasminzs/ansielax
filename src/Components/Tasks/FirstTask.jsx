import React from "react";
import {
  Container,
  Button,
  AreaButton,
  AreaWrapper,
  AreaTitle,
} from "../../Styles/Components/tasks/firstTask";

export function FirstTask({ setShowTask, setTask, task }) {
  return (
    <Container>
      <AreaWrapper>
      <AreaTitle>
        <h2>Respire no ritmo dessa animação:</h2>
      </AreaTitle>
        
        <p>
          Inspire e expire em sincronia com a animação, por no mínimo 60
          segundos.
        </p>

        <img
          src="https://eurekka-wordpress.s3.amazonaws.com/wp-content/uploads/2019/09/03161003/exercicio-reduzir-ansiedade.gif"
          alt="Gif respiração"
        />
      </AreaWrapper>
        <AreaButton>
          <Button
            onClick={() => {
              setShowTask(false);
              setTask(0);
            }}
          >
            Voltar
          </Button>
          <Button
            onClick={() => {
              setTask(task + 1);
            }}
          >
            Próximo exercício
          </Button>
        </AreaButton>
    </Container>
  );
}
