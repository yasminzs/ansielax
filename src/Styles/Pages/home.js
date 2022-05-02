import styled from "styled-components";
import image from "./fotineas.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 60%;
  height: 500px;

  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;

  scrollbar-width: 0px;
  margin: 90px 0px 0px 0px;
  -webkit-scrollbar {
    display: none;
  }
`;

export const AreaCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200px;

  margin: -40px 0px 50px 0px;

  h3 {
    color: white;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 22%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 3px 4px 7px #ccc;

  margin: 0 20px;
  padding: 10px 20px;

  background-color: #87cefa;

  span {
    color:white;
    text-align: justify;
  }
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
    background-color: #4b0082;
  }
`;
