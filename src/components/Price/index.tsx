import React from "react";
import Header from "../Header";
import * as _ from "./style";
import Chart from "./Chart";

export default function Price() {
  return (
    <_.PriceWrapper>
      <Header />
      <_.PriceContainer>
        <_.PriceLink>Menu 〉 시세확인</_.PriceLink>
        <_.PriceTitle>시세확인</_.PriceTitle>
        <_.PriceTable>
          <Chart />
        </_.PriceTable>
      </_.PriceContainer>
    </_.PriceWrapper>
  );
}
