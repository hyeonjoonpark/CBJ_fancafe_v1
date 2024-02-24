import React, { useEffect, useState } from "react";
import Header from "../Header";
import * as _ from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface GoodsItem {
  goodsId: number;
  goodsName: string;
  price: number;
  sellerId: string;
  date: string;
}

export default function Goods() {
  const [goodsList, setGoodsList] = useState<GoodsItem[]>([]);

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9901/api/goods/list"
        );
        setGoodsList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGoods();
  }, []);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const navigate = useNavigate();
  return (
    <_.GoodsWrapper>
      <Header />
      <_.GoodsContainer>
        <_.GoodsLink>Menu 〉 굿즈보기</_.GoodsLink>
        <_.GoodsTitle>굿즈샵</_.GoodsTitle>
        <div style={{ marginLeft: "100px" }}>
          최병준 선생님의 완벽한 굿즈를 만나보세요!
        </div>
        <_.GoodsUploadBtn onClick={() => navigate("/goods/upload")}>
          굿즈 등록
        </_.GoodsUploadBtn>
        <_.GoodsListWrapper>
          {goodsList.map((item: GoodsItem, index: number) => (
            <_.GoodsItem key={index}>
              <div>{item.goodsName}</div>
              <div>{item.price}원</div>
              <div>판매자: {item.sellerId}</div>
              <div>등록날짜: {formatDate(item.date)}</div>
            </_.GoodsItem>
          ))}
        </_.GoodsListWrapper>
      </_.GoodsContainer>
    </_.GoodsWrapper>
  );
}
