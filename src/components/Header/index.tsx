import React, { useState } from "react";
import * as _ from "./style";
import profile from "../../assets/Profile.jpg";
import Modal from "./Modal";
import GameModal from "./GameModal";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import board from "../../assets/group-users.png";
import goods from "../../assets/boxes.png";
import price from "../../assets/diagram.png";
import chat from "../../assets/chat.png";
import home from "../../assets/home.png";
import game from "../../assets/games.png";

const Header = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isGameModal, setIsGameModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <_.HeaderWrapper>
      <_.HeaderContainer>
        {isLoggedIn ? (
          <_.HeaderProfileWrapper>
            <_.HeaderProfileImg src={profile} />
            <_.HeaderProfileName onClick={handleModal}>
              hyeonjoonpark 님
            </_.HeaderProfileName>
            {isModal ? <Modal /> : null}
          </_.HeaderProfileWrapper>
        ) : (
          <_.HeaderProfileWrapper>
            <_.HeaderAuthWrapper>
              <_.HeaderAuth onClick={handleLogIn}>로그인</_.HeaderAuth>
            </_.HeaderAuthWrapper>
          </_.HeaderProfileWrapper>
        )}

        <_.MenuLine />

        <_.MenuWrapper>
          <b>Menu</b>
          <_.MenuButton
            onClick={() => {
              navigate("/");
            }}
          >
            <_.MenuIcon src={home} />
            메인화면
          </_.MenuButton>

          <_.MenuButton
            onClick={() => {
              navigate("/board");
            }}
          >
            <_.MenuIcon src={board} />
            게시판
          </_.MenuButton>
          <_.MenuButton
            onClick={() => {
              navigate("/goods");
            }}
          >
            <_.MenuIcon src={goods} />
            굿즈보기
          </_.MenuButton>
          <_.MenuButton
            onClick={() => {
              navigate("/price");
            }}
          >
            <_.MenuIcon src={price} />
            시세확인
          </_.MenuButton>
          <_.MenuButton
            onClick={() => {
              navigate("/chat");
            }}
          >
            <_.MenuIcon src={chat} />
            채팅하기
          </_.MenuButton>

          <_.MenuButton
            onClick={() => {
              setIsGameModal(!isGameModal);
            }}
          >
            <_.MenuIcon src={game} />팬 게임
          </_.MenuButton>
        </_.MenuWrapper>
        {isGameModal ? <GameModal /> : null}
      </_.HeaderContainer>
    </_.HeaderWrapper>
  );
};

export default Header;
