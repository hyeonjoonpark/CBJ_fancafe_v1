import React, { useEffect, useState } from "react";
import Header from "../Header";
import * as _ from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Goods() {
  return (
    <_.GoodsWrapper>
      <Header />
      <_.GoodsContainer>
        <_.GoodsLink>Menu 〉 굿즈보기</_.GoodsLink>
        <_.GoodsTitle>굿즈샵</_.GoodsTitle>
        <_.GoodsListWrapper>굿즈 아이템 보이는 곳</_.GoodsListWrapper>
      </_.GoodsContainer>
    </_.GoodsWrapper>
  );
}
