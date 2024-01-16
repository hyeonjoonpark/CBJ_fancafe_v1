import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import * as B from "../Board/style";
import * as _ from "./style";

export default function BoardDetail() {
  const id = window.location.href.split("/")[4];
  const [boardData, setBoardData] = useState<any>({});

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedDate;
  };

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
              <h3>작성일: {formatDate(boardData.writeDate)}</h3>
              <h3>👀 {boardData.viewCount}</h3>
              <h3 onClick={handleUpdateLike}>❤️ {boardData.likeCount}</h3>
            </_.CountWrapper>
          </_.BoardDetailWrapper>
        </B.BoardContainer>
      </B.BoardWrapper>
    </div>
  );
}
