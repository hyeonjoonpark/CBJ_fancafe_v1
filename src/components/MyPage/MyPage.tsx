import React, { useEffect, useState } from "react";
import Header from "../Header";
import * as _ from "./style";
import axios from "axios";

export default function MyPageComponent() {
  const [userInfo, setUserInfo] = useState<any>({});
  const [boardData, setBoardData] = useState<any[]>([]); // boardData 초기값을 빈 배열로 설정

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

  useEffect(() => {
    window.scrollTo(0, 0);

    const id = localStorage.getItem("id");

    axios
      .get(`http://115.140.87.3/api/board/list?id=${id}`)
      .then((res) => {
        console.log(res);
        setBoardData(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <_.MyPageWrapper>
        <Header />

        <_.Container>
          <_.MyPageLink>메뉴 〉 마이페이지</_.MyPageLink>
          <_.MyPageTitle>내 정보</_.MyPageTitle>

          <_.MyInfoWrapper>
            <h3>이름: {localStorage.getItem("id")}</h3>
            <h3>이메일: {localStorage.getItem("email")}</h3>
          </_.MyInfoWrapper>

          <_.Divider />

          <_.Title>내가 작성한 게시글</_.Title>

          <_.MyBoardWrapper>
            <_.BoardTable>
              <_.BoardTableHead>
                <_.BoardTableHeadRow>
                  <_.BoardTableHeadData>번호</_.BoardTableHeadData>
                  <_.BoardTableHeadData>제목</_.BoardTableHeadData>
                  <_.BoardTableHeadData>작성일</_.BoardTableHeadData>
                </_.BoardTableHeadRow>
              </_.BoardTableHead>
              <_.BoardTableBody>
                {boardData &&
                  boardData.map((board: any, index: number) => (
                    <_.BoardTableBodyRow key={index}>
                      <_.BoardTableBodyData>{index + 1}</_.BoardTableBodyData>
                      <_.BoardTableBodyData>
                        <_.BoardTableBodyLink
                          to={`/board/${board.boardId}`}
                          target="_blank"
                        >
                          {board.title}
                        </_.BoardTableBodyLink>
                      </_.BoardTableBodyData>
                      <_.BoardTableBodyData>
                        {formatDate(board.writeDate)}
                      </_.BoardTableBodyData>
                    </_.BoardTableBodyRow>
                  ))}
              </_.BoardTableBody>
            </_.BoardTable>
          </_.MyBoardWrapper>
        </_.Container>
      </_.MyPageWrapper>
    </div>
  );
}
