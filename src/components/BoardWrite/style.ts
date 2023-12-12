import styled from "styled-components";

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const BoardUploadForm = styled.form`
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

export const BoardUploadListWrapper = styled.div`
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

export const BoardUploadInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

export const BoardUploadInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid skyblue;
  border-radius: 20px;
  margin-left: 30px;
`;

export const BoardUploadBtn = styled.button`
  width: 100px;
  height: 50px;
  margin-top: 30px;
  background-color: skyblue;
  border: none;
  border-radius: 10px;
  font-size: 20px;
`;

export const BoardInputArea = styled.textarea`
  width: 100%;
  height: 300px;
  resize: none;
  border: 1px solid skyblue;
  border-radius: 20px;
  margin-left: 30px;
  padding: 10px;
`;
