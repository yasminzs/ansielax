import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 90px;
  background-color:#fff;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #87cefa;
  color: white;
  width: 70%;
  height: 100%;

  margin: 10px;
  padding: 10px 40px;
  border-radius: 15px;
  box-shadow: 2px 5px 5px #ccc;
`;

export const BoxWithLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  /* background-color: white; */
  background-color: #87cefa;
  color: white;
  width: 70%;
  height: 100%;

  margin: 10px;
  padding: 10px 40px;
  border-radius: 15px;
  box-shadow: 2px 5px 5px #ccc;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    filter: brightness(95%);
  }
`;

export const Title = styled.h1`
  margin: 25px 0px;
`;
