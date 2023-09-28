import React from "react";
import ApexCharts from "react-apexcharts";

interface ChartProps {
  style?: React.CSSProperties;
}

// 현재 시간을 생성하는 함수
function getCurrentTimeData() {
  const now = new Date();
  const categories = [];
  const data = [];

  // 가로축에 표시할 레이블을 생성 (예: "Jan 09:00 AM", "Jan 10:00 AM" 등)
  for (let i = 0; i < 7; i++) {
    // 7개 항목만 생성
    const timeLabel = now.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    categories.unshift(timeLabel); // 레이블을 배열의 맨 앞에 추가
    data.unshift(Math.floor(Math.random() * 100)); // 데이터도 배열의 맨 앞에 추가
    now.setHours(now.getHours() - 1); // 이전 시간대로 이동
  }

  return { categories, data };
}

const { categories, data } = getCurrentTimeData(); // 현재 시간 데이터 가져오기

const chartOptions = {
  chart: {
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth", // "straight" 대신 "smooth"로 변경
  },
  title: {
    text: "현재 포인트 환율 변동",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: categories, // 현재 시간 레이블 사용
  },
};

export default function Chart(props: ChartProps) {
  return (
    <ApexCharts
      options={chartOptions as any}
      series={[{ name: "포토카드", data: data }]}
      type="line"
      width={1080}
      height={450}
      style={props.style}
    />
  );
}
