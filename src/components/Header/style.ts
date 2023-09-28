import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background: rgba(142, 192, 228, 0.3);
  width: 16%;
  flex-direction: column;
`;

export const HeaderProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

export const HeaderProfileImg = styled.img`
  width: 70%;
  height: 70%;
  border-radius: 50%;
`;

export const HeaderProfileName = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

export const HeaderAuthWrapper = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const HeaderAuth = styled.button`
  width: 240px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #fff;
  margin-top: 20px;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  border: none;
`;
