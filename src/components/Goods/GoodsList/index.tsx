import React from "react";
import GoodsItem from "../GoodsItem"; // 상품 항목 컴포넌트를 가져옵니다.
import { GoodsItem as GoodsItemType } from "../types"; // 상품 데이터 타입을 가져옵니다.
import * as _ from "./style";

interface GoodsListProps {
  data: GoodsItemType[]; // 상품 데이터 배열을 받는 prop
}

const GoodsList: React.FC<GoodsListProps> = ({ data }) => {
  return (
    <_.GoodsItemWrapper>
      {data.map((item) => (
        <GoodsItem key={item.goodsId} item={item} />
      ))}
    </_.GoodsItemWrapper>
  );
};

export default GoodsList;
