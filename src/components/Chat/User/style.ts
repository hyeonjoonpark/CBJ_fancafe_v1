import styled from "styled-components";

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ChatContainer = styled.div`
  height: 100vh;
  width: 87%;
  right: 0;
  overflow: auto;
`;

export const ChatTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-left: 100px;
`;

export const ChatLink = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 100px;
  margin-top: 80px;
`;

export const ChatForm = styled.div`
  width: 80%;
  height: 100%;
  align-items: center;
  background: rgba(142, 176, 228, 0.7);
  margin-left: 100px;
  margin-bottom: 100px;
  overflow: auto;
`;

export const ChatSubmitForm = styled.form`
  width: 100%;
  height: 50px;
  display: inline-block;
  justify-content: center;
  bottom: 0;
  gap: 20px;
`;

export const ChatInput = styled.input`
  bottom: 0;
  width: 85%;
  height: 40px;
  border-radius: 10px;
  margin-top: 75%;
  margin-left: 2%;
`;

export const ChatSubmit = styled.button`
  height: 45px;
  width: 80px;
  margin-left: 2.5%;
  border-radius: 10px;
`;

export const ChatWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  overflow: auto;
`;
