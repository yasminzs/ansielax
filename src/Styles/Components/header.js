import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 90px;
  padding: 5px 20px 0px 50px;

  font-size: 35px;
  background: linear-gradient(45deg, #87cefa, #4b0082);

  box-shadow: 0px 1px 7px black;

  z-index: 1;
  position: fixed;

  img {
    width: 200px;
    cursor: pointer;
  }

  -webkit-scrollbar {
    display: none;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  height: 100%;
  width: 40%;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 100px;
  height: 35px;

  margin-right: 10px;
  border: none;
  border-radius: 10px;

  background-color: transparent;
  color: white;

  font-size: 17px;

  &:hover {
    transition: 0.8s;
    background-color: #87cefa;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-family: "Ubuntu-Condensed", sans-serif;

  color: white;
`;
