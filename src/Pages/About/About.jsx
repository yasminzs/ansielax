import React from "react";
import {
  Container,
  Box,
  AreaWrapper,
  Title,
  AjustList,
} from "../../Styles/Pages/about";

export function About() {
  return (
    <Container>
      <Title>Sobre a Ansiedade</Title>

      <Box>
        <AreaWrapper>
          <h3>O que é:</h3>
          <br />
          <span>
            A ansiedade e os transtornos de ansiedade são um conjunto de doenças
            psiquiátricas marcadas pela preocupação excessiva ou constante de
            que algo negativo vai acontecer.Em especial durante as crises de
            ansiedade, as pessoas não conseguem se ater ao presente e sentem uma
            grande tensão, às vezes sem um motivo aparente. Esse problema pode
            manifestar sintomas físicos também, como sudorese e arritmia
            cardíaca.
          </span>
        </AreaWrapper>
        <AreaWrapper>
          <h3>O que ativa a ansiedade: </h3>
          <br />
          <span>
            Traumas e eventos estressantes podem contribuir para o aumento da
            ansiedade. O Transtorno de Ansiedade Generalizada também pode piorar
            durante os períodos de estresse.
          </span>
        </AreaWrapper>
        <AreaWrapper>
          <h3>O que pode piorar a ansiedade: </h3>
          <br />
          <AjustList>
            <div>
              <ul>
                <li>Lotar a sua agenda</li>
                <li>Exagerar no café</li>
                <li>Estar sempre atrasado</li>
                <li>Ser viciado em redes sociais</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Consumir notícias o tempo todo</li>
                <li>Estar disponível o tempo todo</li>
                <li>Dormir menos do que o necessário</li>
                <li>Não parar para fazer as refeições</li>
              </ul>
            </div>
          </AjustList>
        </AreaWrapper>
      </Box>
    </Container>
  );
}
