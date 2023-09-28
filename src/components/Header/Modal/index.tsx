import React from "react";
import * as _ from "./style";
import { useAuth } from "../../../hooks/useAuth";

const Modal = () => {
  const { isLoggedIn, handleLogout } = useAuth();
  return (
    <div>
      <_.ModalWrapper onClick={handleLogout}>로그아웃</_.ModalWrapper>
    </div>
  );
};

export default Modal;
