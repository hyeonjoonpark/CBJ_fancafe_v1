import React from "react";
import * as _ from "./style";
import { useAuth } from "../../../hooks/useAuth";

const Modal = () => {
  const { handleLogout } = useAuth();
  const navigatePage = () => {
    window.location.href = "/mypage";
  };
  return (
    <div>
      <_.ModalWrapper onClick={navigatePage}>내 정보</_.ModalWrapper>
      <_.ModalWrapper onClick={handleLogout}>로그아웃</_.ModalWrapper>
    </div>
  );
};

export default Modal;
