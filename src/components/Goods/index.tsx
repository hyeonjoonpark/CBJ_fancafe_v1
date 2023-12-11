import React, { useEffect, useState } from "react";
import Header from "../Header";
import * as _ from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Goods() {
  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9901/api/goods/list"
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGoods();
  }, []);

  const goodsList = [1, 2, 3, 4, 5, 6, 7]; // 임시 데이터

  return (
    <_.GoodsWrapper>
      <Header />
      <_.GoodsContainer>
        <_.GoodsLink>Menu 〉 굿즈보기</_.GoodsLink>
        <_.GoodsTitle>굿즈샵</_.GoodsTitle>
        <_.GoodsListWrapper>
          {goodsList.map((item) => (
            <_.GoodsItem key={item}>{item}</_.GoodsItem>
          ))}
        </_.GoodsListWrapper>
      </_.GoodsContainer>
    </_.GoodsWrapper>
  );
}
