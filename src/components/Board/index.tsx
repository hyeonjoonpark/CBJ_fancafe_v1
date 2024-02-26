import React, { useEffect, useState } from "react";
import Header from "../Header";
import * as _ from "./style";
import axios from "axios";

// 게시판 데이터 타입
interface BoardData {
  boardId: number;
  title: string;
  userId: string;
  writeDate: string;
}

const Board = () => {
  const [boardData, setBoardData] = useState<BoardData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // 한 페이지에 보여줄 게시물 수

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://115.140.87.3/api/board/list?page=${currentPage}&size=${pageSize}`
        );
        setBoardData(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

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

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <_.BoardWrapper>
      <Header />
      <_.BoardContainer>
        <_.BoardLink>Menu 〉 게시글작성</_.BoardLink>
        <_.BoardTitle>게시판</_.BoardTitle>

        <_.BoardTable>
          <_.BoardTableHead>
            <_.BoardTableHeadRow>
              <_.BoardTableHeadData>번호</_.BoardTableHeadData>
              <_.BoardTableHeadData>제목</_.BoardTableHeadData>
              <_.BoardTableHeadData>작성자</_.BoardTableHeadData>
              <_.BoardTableHeadData>작성일</_.BoardTableHeadData>
            </_.BoardTableHeadRow>
          </_.BoardTableHead>

          <_.BoardTableBody>
            {boardData.map((boardItem) => (
              <_.BoardTableRow>
                <_.BoardTableData>{boardItem.boardId}</_.BoardTableData>
                <_.BoardTableData>{boardItem.title}</_.BoardTableData>
                <_.BoardTableData>{boardItem.userId}</_.BoardTableData>
                <_.BoardTableData>
                  {formatDate(boardItem.writeDate)}
                </_.BoardTableData>
              </_.BoardTableRow>
            ))}
          </_.BoardTableBody>
        </_.BoardTable>
        <_.BoardTableFooter>
          <_.BoardTablePagination>
            <_.PaginationButton
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              이전 페이지
            </_.PaginationButton>
            <_.PaginationButton onClick={goToNextPage}>
              다음 페이지
            </_.PaginationButton>
          </_.BoardTablePagination>
        </_.BoardTableFooter>

        <_.WriteButton onClick={() => (window.location.href = "/board/write")}>
          글 작성하기
        </_.WriteButton>
      </_.BoardContainer>
    </_.BoardWrapper>
  );
};

export default Board;
