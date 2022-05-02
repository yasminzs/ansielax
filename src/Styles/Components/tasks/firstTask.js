import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  height: 100%;
  padding: 20px 0px 0px 0px;
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

export const AreaButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;

  margin: 25px 0px 0px 0px;

  button {
    margin: 0px 10px;
  }
`;

export const AreaWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 15px;
    width: 380px;
  }
`;

export const AreaTitle = styled.div`
  border: 1px solid white;
  border-radius: 15px;
  padding: 10px;
  background-color: #87cefa;
  margin-bottom: 15px;
`;
