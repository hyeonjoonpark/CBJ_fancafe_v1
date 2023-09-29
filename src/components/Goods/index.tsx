import React, { useEffect, useState } from "react";
import Header from "../Header";
import * as _ from "./style";
import axios from "axios";
import GoodsList from "./GoodsList"; // GoodsList 컴포넌트를 가져옵니다.
import { GoodsItem } from "./types/index"; // 사용자 정의 타입을 가져옵니다.

export default function Goods() {
  const [goodsData, setGoodsData] = useState<GoodsItem[]>([]); // 상품 데이터를 저장하는 상태 변수

  useEffect(() => {
    axios
      .get("http://localhost:9901/api/goods")
      .then((res) => {
        // API 응답을 받으면 상품 데이터를 상태에 설정합니다.
        setGoodsData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <_.GoodsWrapper>
      <Header />
      <_.GoodsContainer>
        <_.GoodsLink>Menu 〉 굿즈보기</_.GoodsLink>
        <_.GoodsTitle>굿즈샵</_.GoodsTitle>
        {/* 상품 데이터를 GoodsList 컴포넌트에 props로 전달합니다. */}
        <_.GoodsListWrapper>
          <GoodsList data={goodsData} />
        </_.GoodsListWrapper>
      </_.GoodsContainer>
    </_.GoodsWrapper>
  );
}
