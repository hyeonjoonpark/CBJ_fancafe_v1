import styled from "styled-components";

export const ProfileUploadWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileUploadContainer = styled.form`
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`;

export const ProfileUploadTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  margin: 0 auto;
  border: none;
`;

export const ProfileUploadInput = styled.input`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const ProfileNameInput = styled.input`
  width: 200px;
  height: 40px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const ProfileUploadButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: rgba(142, 176, 228, 0.7);
  border: none;
  border-radius: 5px;
  margin-top: 30px;
  font-weight: 700;
  cursor: pointer;
`;
