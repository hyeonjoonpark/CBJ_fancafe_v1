import React, { useState, useEffect } from "react";
import * as _ from "./style";
import Header from "../../Header";
import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:9901"); // 백엔드 서버 URL에 맞게 수정해주세요

export default function User(): JSX.Element {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  useEffect(() => {
    // 채팅 메시지를 수신하는 이벤트 리스너 등록
    socket.on("chat message", (message: string) => {
      setChatMessages((prevMessages: string[]) => [...prevMessages, message]);
    });

    return () => {
      // 컴포넌트 언마운트 시 소켓 연결 해제
      socket.disconnect();
    };
  }, []);

  const handleChatInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };

  const handleChatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatInput.trim() !== "") {
      // 서버로 채팅 메시지 전송
      socket.emit("chat message", chatInput.trim());
      setChatInput("");
      setChatMessages((prevMessages: string[]) => [
        ...prevMessages,
        chatInput.trim(),
      ]); // 채팅 메시지를 수신하는 이벤트 리스너를 대기하기 전에 메시지를 미리 추가
    }
  };

  return (
    <_.ChatWrapper>
      <Header />
      <_.ChatContainer>
        <_.ChatLink>Menu 〉 채팅하기</_.ChatLink>
        <_.ChatTitle>채팅</_.ChatTitle>
        <_.ChatForm>
          <_.ChatWrap>
            {chatMessages.map((message, index) => (
              <_.ChatMessage key={index}>{message}</_.ChatMessage>
            ))}
          </_.ChatWrap>
          <_.ChatSubmitForm onSubmit={handleChatSubmit}>
            <_.ChatInput
              placeholder="채팅을 입력하세요"
              value={chatInput}
              onChange={handleChatInput}
            />
            <_.ChatSubmit type="submit">전송</_.ChatSubmit>
          </_.ChatSubmitForm>
        </_.ChatForm>
      </_.ChatContainer>
    </_.ChatWrapper>
  );
}
