import styled from "styled-components";

export const GoodsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const GoodsContainer = styled.div`
  height: 100vh;
  width: 87%;
  right: 0;
  overflow: auto;
`;

export const GoodsTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-left: 100px;
`;

export const GoodsLink = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 100px;
  margin-top: 100px;
`;

export const GoodsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 100px;
  margin-top: 50px;
  height: auto;
  width: 80%;
  overflow: auto;
  gap: 40px;
  /* background-color: aliceblue; */
  margin-bottom: 100px;
`;

export const GoodsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  border: 1px solid skyblue;
  border-radius: 20px;
`;
