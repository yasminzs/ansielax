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

  background-color: white;
  width: 70%;
  height: 100%;

  margin: 10px;
  padding: 0px 40px;

  border-radius: 15px;
  box-shadow: 2px 5px 5px #ccc;
`;

export const AreaWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 15px 0px;
`;

export const AjustList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
  height: 120px;
  align-content: center;
  justify-content: space-around;
`;

export const Title = styled.h1`
  margin: 25px 0px;
`;
