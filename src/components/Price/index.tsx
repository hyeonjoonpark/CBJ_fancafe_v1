import React, { useEffect } from "react";
import Header from "../Header";
import * as _ from "./style";
import Chart from "./Chart";
import { useNavigate } from "react-router-dom";

export default function Price() {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (!userId) {
      alert("로그인 후 이용해주세요.");
      navigate("/login");
    }
  }, []);

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
