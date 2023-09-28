import React from "react";
import Header from "../Header";
import * as _ from "./style";

const Board = () => {
  return (
    <_.BoardWrapper>
      <Header />
      <_.BoardContainer>
        <_.BoardLink>Menu 〉 게시글작성</_.BoardLink>
        <_.BoardTitle>게시판</_.BoardTitle>
      </_.BoardContainer>
    </_.BoardWrapper>
  );
};

export default Board;
