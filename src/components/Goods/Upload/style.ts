import styled from "styled-components";

export const GoodsUploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const GoodsUploadContainer = styled.div`
  height: 100vh;
  width: 87%;
  right: 0;
  overflow: auto;
`;

export const GoodsUploadTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-left: 100px;
`;

export const GoodsUploadLink = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 100px;
  margin-top: 80px;
`;

export const GoodsUploadListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  width: 80%;
  overflow: auto;
  gap: 40px;
  margin-bottom: 100px;
`;

export const GoodsUploadForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
  margin-left: 100px;
  margin-top: 60px;
  height: auto;
  width: 100%;
  overflow: auto;
  gap: 40px;
  margin-bottom: 100px;
`;

export const GoodsUploadInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const GoodsUploadInput = styled.input`
  width: 500px;
  height: 50px;
  border: 1px solid skyblue;
  border-radius: 20px;
  margin-left: 30px;
`;

export const GoodsUploadBtn = styled.button`
  width: 100px;
  height: 50px;
  margin-left: 100px;
  margin-top: 30px;
  background-color: skyblue;
  border: none;
  border-radius: 10px;
  font-size: 20px;
`;
