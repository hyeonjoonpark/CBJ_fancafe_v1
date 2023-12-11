import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 17%;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background: rgba(142, 192, 228, 0.3);
  width: 100%;
  flex-direction: column;
  overflow: auto;
`;

export const HeaderProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

export const HeaderProfileImg = styled.img`
  width: 100px;
  height: 100px;
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

export const MenuWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const MenuButton = styled.button`
  width: 80%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: transparent;
  margin-top: 30px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const MenuIcon = styled.img`
  height: 25px;
  width: auto;
`;

export const MenuLine = styled.div`
  width: 80%;
  height: 1.5px;
  background-color: rgb(204, 204, 204);
  margin-top: 40px;
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 100px;
`;
