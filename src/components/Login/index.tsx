import React from "react";
import { useAuth } from "../../hooks/useAuth";
import * as L from "./style";
import logo from "../../assets/Profile.jpg";

function Login() {
  const {
    id,
    email,
    password,
    handleInputId,
    handleInputEmail,
    handleInputPw,
    handleSubmit,
  } = useAuth();

  return (
    <L.PageWrapper>
      <L.LoginContainer>
        <L.LoginWrap onSubmit={handleSubmit}>
          <L.LoginTitle>로그인</L.LoginTitle>
          <L.LoginInput
            type="text"
            name="id"
            value={id}
            onChange={handleInputId}
            placeholder="아이디를 입력해주세요"
          />
          <L.LoginInput
            type="email"
            name="email"
            value={email}
            onChange={handleInputEmail}
            placeholder="이메일을 입력해주세요"
          />
          <L.LoginInput
            type="password"
            name="password"
            value={password}
            onChange={handleInputPw}
            placeholder="비밀번호를 입력해주세요"
          />

          <L.MoveSignUp
            onClick={() => {
              window.location.replace("/signup");
            }}
          >
            <b style={{ color: "black" }}>아직 회원이 아니신가요?</b>{" "}
            회원가입하기
          </L.MoveSignUp>
          <L.LoginButton>로그인</L.LoginButton>
        </L.LoginWrap>
      </L.LoginContainer>
      <L.LogoWrapper src={logo} />
    </L.PageWrapper>
  );
}

export default Login;
