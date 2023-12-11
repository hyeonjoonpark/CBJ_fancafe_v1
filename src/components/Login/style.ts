import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const LoginWrap = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const LoginInput = styled.input`
  width: 500px;
  height: 50px;
  border: none;
  border-bottom: 2px solid #d3d3d3;
  border-radius: 10px;
  margin-top: 20px;
`;

export const MoveSignUp = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 15px;
  font-weight: bold;
  color: red;
  cursor: pointer;
  margin-right: 0%;
`;

export const LoginButton = styled.button`
  width: 500px;
  height: 50px;
  color: white;
  margin-top: 30px;
  background: rgba(142, 192, 228, 0.3);
  border-radius: 10px;
  color: black;
  border: 1px solid #d3d3d3;
`;

export const LogoWrapper = styled.img`
  width: 50vw;
  height: 100vh;
`;
