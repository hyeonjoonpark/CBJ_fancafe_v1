import React from "react";
import Header from "../Header";
import * as _ from "./style";

export default function Chat() {
  return (
    <_.ChatWrapper>
      <Header />
      <_.ChatContainer>
        <_.ChatLink>Menu 〉 채팅하기</_.ChatLink>
        <_.ChatTitle>채팅</_.ChatTitle>
      </_.ChatContainer>
    </_.ChatWrapper>
  );
}
