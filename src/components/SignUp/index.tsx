import React from "react";
import * as S from "./style";
import logo from "../../assets/picture.jpeg";

export default function SignUp() {
  return (
    <div>
      <S.PageWrapper>
        <S.SignUpContainer>
          <S.SignUpWrap>
            <S.SignUpTitle>회원가입</S.SignUpTitle>
            <S.SignUpInput
              type="text"
              name="id"
              //   value={}
              //   onChange={}
              placeholder="아이디를 입력해주세요"
            />
            <S.SignUpInput
              type="email"
              name="email"
              //   value={}
              //   onChange={}
              placeholder="이메일을 입력해주세요"
            />
            <S.SignUpInput
              type="password"
              name="password"
              //   value={}
              //   onChange={}
              placeholder="비밀번호를 입력해주세요"
            />

            <S.MoveLogin
              onClick={() => {
                window.location.replace("/login");
              }}
            >
              <b style={{ color: "black" }}>이미 가입하셨나요?</b> 로그인하기
            </S.MoveLogin>
            <S.SignUpButton>회원가입</S.SignUpButton>
          </S.SignUpWrap>
        </S.SignUpContainer>
        <S.LogoWrapper src={logo} />
      </S.PageWrapper>
    </div>
  );
}
