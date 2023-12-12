import styled from "styled-components";

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const BoardContainer = styled.div`
  height: 100vh;
  width: 87%;
  right: 0;
  overflow: auto;
`;

export const BoardTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-left: 100px;
`;

export const BoardLink = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 100px;
  margin-top: 80px;
`;

export const BoardTable = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin-left: 100px;
`;

export const BoardTableHead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-bottom: 1px solid #ddd;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  border-bottom: transparent;
  justify-content: center;
`;

export const BoardTableHeadRow = styled.tr`
  text-align: left;
  background-color: #f2f2f2;
  color: #000;
  font-weight: 700;
  font-size: 15px;
`;

export const BoardTableHeadData = styled.th`
  padding: 10px;
`;

export const BoardTableBody = styled.tbody`
  border-bottom: 1px solid #ddd;
`;

export const BoardTableRow = styled.tr`
  text-align: left;
  background-color: #fff;
  color: #000;
  font-weight: 700;
  font-size: 15px;
`;

export const BoardTableData = styled.td`
  padding: 10px;
  font-size: 15px;
`;

export const BoardTableFooter = styled.tfoot`
  display: flex;
  border-bottom: 1px solid #ddd;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  border-bottom: transparent;
  justify-content: center;
  align-items: center;
`;

export const BoardTablePagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
  margin-right: 100px;
`;

export const PaginationButton = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  /* margin: 0 5px; */
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  margin-bottom: 30px;
`;

export const WriteButton = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  /* margin: 0 5px; */
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  margin-bottom: 30px;
  margin-right: 150px;
  float: right;
`;
