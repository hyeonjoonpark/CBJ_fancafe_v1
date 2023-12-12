import styled from "styled-components";

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

export const ChatContainer = styled.div`
  height: 100vh;
  width: 87%;
  right: 0;
  /* background-color: #f2f2f2; */
  padding-left: 40px;
  padding-right: 40px;
`;

export const ChatTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
`;

export const ChatLink = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
`;

export const ChatForm = styled.div`
  width: auto;
  height: auto;
  align-items: center;
  background: #f2f2f2;
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px;
`;

export const ChatSubmitForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 30px;
  width: 100%;
`;

export const ChatInput = styled.input`
  flex: 1;
  height: 40px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin-right: 10px;
  margin-top: 10px;
  width: 100%;
`;

export const ChatSubmit = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 10px;
  border: none;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
`;

export const ChatWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: auto;
`;

export const ChatMessage = styled.div`
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 10px;
`;
