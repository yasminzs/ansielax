import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 90px;
  background-color: whitesmoke;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 70%;
  min-height: 400px;
  height: 100%;

  margin: 10px;
  padding: 10px 40px;
  border-radius: 15px;
  box-shadow: 2px 5px 5px #ccc;
`;

export const Title = styled.h1`
  margin: 25px 0px;
`;

export const Button = styled.button`
  width: auto;
  height: 35px;

  margin-right: 10px;
  padding: 0px 10px;
  border: none;
  border-radius: 10px;

  background-color: transparent;
  color: black;
  border: 0.5px solid black;
  font-size: 17px;

  &:hover {
    transition: 0.8s;
    background-color: #87cefa;
    border: none;
  }
`;

export const AreaImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;

  img {
    width: 160px;
    cursor: pointer;
  }
`;
