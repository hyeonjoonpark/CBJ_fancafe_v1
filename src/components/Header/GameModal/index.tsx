import React from "react";
import * as _ from "./style";
import { Link } from "react-router-dom";

const GameModal = () => {
  const notion = () => {
    window.open(
      "https://tarry-halloumi-493.notion.site/BFS-73de61255cab4cac94264c2d302d3df2"
    );
  };
  return (
    <div>
      <Link to="#">
        <_.ModalWrapper>
          <_.GameTitle onClick={notion}>BBamjune Fan Studio</_.GameTitle>
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
