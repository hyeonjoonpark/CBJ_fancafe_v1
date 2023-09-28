import React from "react";
import Header from "../Header";
import * as _ from "./style";

export default function Goods() {
  return (
    <_.GoodsWrapper>
      <Header />
      <_.GoodsContainer>
        <_.GoodsLink>Menu 〉 굿즈보기</_.GoodsLink>
        <_.GoodsTitle>굿즈샵</_.GoodsTitle>
      </_.GoodsContainer>
    </_.GoodsWrapper>
  );
}
