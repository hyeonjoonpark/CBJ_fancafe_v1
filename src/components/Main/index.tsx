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

        <_.MainItemWrapper>
          <span>
            이 사이트는 부산소프트웨어마이스터고등학교 최병준 선생님 팬들의
            원활한 덕질활동을 위해 제작되었습니다
          </span>
          <span>
            <h2>이 사이트를 제작한 이유</h2>
          </span>
          <span>1. 최병준 선생님은 잘생겼다</span>
          <span>2. 최병준 선생님은 매력적이다</span>
          <span>3. 최병준 선생님은 목소리가 좋으시다</span>
          <span>4. 최병준 선생님은 친절하시다</span>
        </_.MainItemWrapper>
      </_.MainContainer>
    </_.MainWrapper>
  );
};

export default Main;
