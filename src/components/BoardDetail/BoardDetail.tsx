import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import * as B from "../Board/style";
import * as _ from "./style";

export default function BoardDetail() {
  const id = window.location.href.split("/")[4];
  const [boardData, setBoardData] = useState<any>({});

  const handleUpdateLike = () => {
    axios
      .put(`http://localhost:9901/api/board/like/update`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:9901/api/board/detail?id=${id}`)
      .then((res) => {
        const [title, content, likeCount, viewCount, writeDate, writer] =
          res.data;

        setBoardData({
          title,
          content,
          writer,
          writeDate,
          viewCount,
          likeCount,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <B.BoardWrapper>
        <Header />

        <B.BoardContainer>
          <B.BoardLink>게시글 〉 상세보기</B.BoardLink>
          <B.BoardTitle>게시판</B.BoardTitle>

          <_.BoardDetailWrapper>
            <_.DetailWrapper>
              <h1>{boardData.title}</h1>
              <h3>{boardData.content}</h3>
            </_.DetailWrapper>

            <_.CountWrapper>
              <h3>작성자: {boardData.writer}</h3>
              <h3>작성일: {boardData.writeDate}</h3>
              <h3>👀 {boardData.viewCount}</h3>
              <h3 onClick={handleUpdateLike}>❤️ {boardData.likeCount}</h3>
            </_.CountWrapper>
          </_.BoardDetailWrapper>
        </B.BoardContainer>
      </B.BoardWrapper>
    </div>
  );
}
