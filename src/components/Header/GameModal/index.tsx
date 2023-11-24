import React from "react";
import * as _ from "./style";
import { Link } from "react-router-dom";

const GameModal = () => {
  return (
    <div>
      <Link to="#">
        <_.ModalWrapper>
          <_.GameTitle>BBamjune Fan Studio</_.GameTitle>
        </_.ModalWrapper>
      </Link>

      <Link to="#">
        <_.ModalWrapper>
          <_.GameTitle>추리 게임</_.GameTitle>
        </_.ModalWrapper>
      </Link>

      <Link to="#">
        <_.ModalWrapper>
          <_.GameTitle>무협지 게임</_.GameTitle>
        </_.ModalWrapper>
      </Link>
    </div>
  );
};

export default GameModal;
