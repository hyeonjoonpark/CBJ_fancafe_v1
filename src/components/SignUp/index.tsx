import React, { FormEvent, ChangeEvent, useState } from "react";
import * as S from "./style";
import axios from "axios";

export default function SignUp() {
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUpSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9901/api/signup", // 서버 주소를 상대 경로로 변경
        formData
      );
      console.log(response);
      window.location.replace("/profile"); // 회원가입 성공 시 리다이렉션 경로를 변경
    } catch (err) {
      setError("회원가입에 실패하였습니다. 다시 시도해주세요.");
      console.error(err);
    }
  };

  return (
    <div>
      <S.PageWrapper>
        <S.SignUpContainer>
          <S.SignUpWrap onSubmit={handleSignUpSubmit}>
            <S.SignUpTitle>회원가입</S.SignUpTitle>
            <S.SignUpInput
              type="text"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              placeholder="아이디를 입력해주세요"
            />
            <S.SignUpInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="이메일을 입력해주세요"
            />
            <S.SignUpInput
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="비밀번호를 입력해주세요"
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
            <S.MoveLogin
              onClick={() => {
                window.location.replace("/login");
              }}
            >
              <div style={{ color: "black" }}>이미 가입하셨나요?</div>{" "}
              로그인하기
            </S.MoveLogin>
            <S.SignUpButton>회원가입</S.SignUpButton>
          </S.SignUpWrap>
        </S.SignUpContainer>
      </S.PageWrapper>
    </div>
  );
}
