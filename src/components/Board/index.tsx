import React, { useEffect } from "react";
import Header from "../Header";
import * as _ from "./style";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (!userId) {
      alert("로그인 후 이용해주세요.");
      navigate("/login");
    }
  }, []);

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
