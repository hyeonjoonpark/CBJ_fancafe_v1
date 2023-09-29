import React from "react";
import Header from "../Header";
import * as _ from "./style";
import userImg from "../../assets/Profile.jpg";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();
  return (
    <_.ChatWrapper>
      <Header />
      <_.ChatContainer>
        <_.ChatLink>Menu 〉 채팅하기</_.ChatLink>
        <_.ChatTitle>채팅</_.ChatTitle>
        <_.UserList
          onClick={() => {
            navigate("/chat/1");
          }}
        >
          <_.UserProfile src={userImg} />
          <_.UserName>hyeonjoonpark 님</_.UserName>
        </_.UserList>
      </_.ChatContainer>
    </_.ChatWrapper>
  );
}
