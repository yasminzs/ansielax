import React, { useState } from "react";
import {
  Container,
  Box,
  Title,
  Button,
  AreaImg,
} from "../../Styles/Pages/exercises.js";
import { FirstTask } from "../../Components/Tasks/FirstTask.jsx";
import { SecundaryTask } from "../../Components/Tasks/SecondTask.jsx";
import { ThirdTask } from "../../Components/Tasks/ThirdTask.jsx";

export default function Exercises() {
  const [showTask, setShowTask] = useState(false);
  const [task, setTask] = useState(0);

  return (
    <Container>
      <Title></Title>

      <Box>
        {!showTask && (
          <>
            <h2>Exercícios para ajudar a ansiedade</h2>
            <h3>vamos começar ?</h3>
            <AreaImg>
              <img
                src="/exec1.jpeg"
                alt="atalho Exercicio 1"
                onClick={() => {
                  setShowTask(true);
                  setTask(1);
                }}
              />
              <img
                src="/exec2.jpeg"
                alt="atalho Exercicio 2"
                onClick={() => {
                  setShowTask(true);
                  setTask(2);
                }}
              />
              <img
                src="/exec3.jpeg"
                alt="atalho Exercicio 3"
                onClick={() => {
                  setShowTask(true);
                  setTask(3);
                }}
              />
            </AreaImg>
            <Button
              onClick={() => {
                setShowTask(true);
                setTask(task + 1);
              }}
            >
              Começar
            </Button>
          </>
        )}
        {showTask && (
          <>
            {task === 1 && (
              <FirstTask
                setShowTask={setShowTask}
                setTask={setTask}
                task={task}
              />
            )}
            {task === 2 && <SecundaryTask setTask={setTask} task={task} />}
            {task === 3 && (
              <ThirdTask
                setTask={setTask}
                task={task}
                setShowTask={setShowTask}
              />
            )}
          </>
        )}
      </Box>
    </Container>
  );
}
