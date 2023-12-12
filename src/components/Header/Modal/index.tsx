import React from "react";
import * as _ from "./style";
import { useAuth } from "../../../hooks/useAuth";

const Modal = () => {
  const { handleLogout } = useAuth();
  return (
    <div>
      <_.ModalWrapper>내 정보</_.ModalWrapper>
      <_.ModalWrapper onClick={handleLogout}>로그아웃</_.ModalWrapper>
    </div>
  );
};

export default Modal;
