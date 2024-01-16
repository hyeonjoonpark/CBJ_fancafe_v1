import { Link } from "react-router-dom";
import styled from "styled-components";

export const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  height: 100vh;
  width: 87%;
  right: 0;
  overflow: auto;
`;

export const MyPageTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-left: 100px;
`;

export const Divider = styled.div`
  width: 80%;
  height: 0.5px;
  background-color: gray;
  margin-top: 20px;
  margin-left: 100px;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-left: 100px;
`;

export const MyPageLink = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 100px;
  margin-top: 80px;
`;

export const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

export const BoardTable = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin-left: 100px;
`;

export const BoardTableBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
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

export const BoardTableHeadData = styled.th`
  padding: 10px;
`;

export const BoardTableBodyRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const BoardTableBodyData = styled.td`
  padding: 10px;
`;

export const BoardTableBodyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const BoardTableHeadRow = styled.tr`
  text-align: left;
  background-color: #f2f2f2;
  color: #000;
  font-weight: 700;
  font-size: 15px;
`;

export const MyBoardWrapper = styled.div`
  overflow: auto;
`;
