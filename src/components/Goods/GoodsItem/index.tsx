import React from "react";
import { GoodsItem as GoodsItemType } from "../types"; // 상품 데이터 타입을 가져옵니다.
import * as _ from "./style";

interface GoodsItemProps {
  item: GoodsItemType; // 상품 데이터를 받는 prop
}

const GoodsItem: React.FC<GoodsItemProps> = ({ item }) => {
  return (
    <>
      <_.GoodsItems>
        <p>
          <b>{item.goodsName}</b>
        </p>
        <p>{item.goodsDetail}</p>
        <p>{item.goodsImage}</p>
        <p>{item.price}원</p>
        <p>{item.seller}</p>
      </_.GoodsItems>
    </>
  );
};

export default GoodsItem;
