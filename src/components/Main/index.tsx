import React from "react";
import * as _ from "./style";
import Header from "../Header";

const Main = () => {
  return (
    <_.MainWrapper>
      <Header />
      <_.MainContainer>
        <_.MainLink>Menu 〉 메인화면</_.MainLink>
        <_.MainTitle>메인페이지</_.MainTitle>
      </_.MainContainer>
    </_.MainWrapper>
  );
};

export default Main;
