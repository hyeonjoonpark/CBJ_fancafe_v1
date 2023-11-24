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

export const UserList = styled.ul`
  margin-left: 100px;
  background: rgba(142, 176, 228, 0.7);
  margin-top: 30px;
  width: 80%;
  height: 80px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const UserMenu = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const UserProfile = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin: 10px 10px;
`;

export const UserName = styled.span`
  height: 70px;
  width: 200px;
  margin: 10px 30px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
`;
