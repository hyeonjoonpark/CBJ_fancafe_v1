import React from "react";
import * as _ from "./style";
import Header from "../../Header";

export default function User() {
  return (
    <div>
      <_.ChatWrapper>
        <Header />
        <_.ChatContainer>
          <_.ChatLink>Menu 〉 채팅하기</_.ChatLink>
          <_.ChatTitle>채팅</_.ChatTitle>
          <_.ChatForm>
            <_.ChatSubmitForm>
              <_.ChatInput placeholder="채팅을 입력하세요" />
              <_.ChatSubmit>전송</_.ChatSubmit>
            </_.ChatSubmitForm>
          </_.ChatForm>
        </_.ChatContainer>
      </_.ChatWrapper>
    </div>
  );
}
