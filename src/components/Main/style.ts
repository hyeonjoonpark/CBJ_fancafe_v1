import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const MainContainer = styled.div`
  height: 100vh;
  width: 87%;
  right: 0;
  overflow: auto;
`;

export const MainTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-left: 100px;
`;

export const MainLink = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 100px;
  margin-top: 80px;
`;

export const MainItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 100px;
  margin-top: 50px;
  height: auto;
  width: 80%;
  overflow: auto;
  gap: 30px;
  /* background-color: aliceblue; */
  margin-bottom: 100px;
`;
