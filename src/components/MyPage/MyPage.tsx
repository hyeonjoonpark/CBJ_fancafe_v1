import React, { useEffect, useState } from "react";
import Header from "../Header";
import * as _ from "./style";
import axios from "axios";

export default function MyPageComponent() {
  const [userInfo, setUserInfo] = useState<any>({});
  useEffect(() => {
    window.scrollTo(0, 0);

    const id = localStorage.getItem("id");

    axios
      .get(`http://localhost:9901/api/user/info?id=${id}`)
      .then((res) => {
        console.log(res);
        const id = res.data[0][0];
        const email = res.data[0][1];
        const isAdmin = res.data[0][2];
        setUserInfo({
          id,
          email,
          isAdmin,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <_.MyPageWrapper>
        <Header />

        <_.Container>
          <_.MyPageLink>메뉴 〉 마이페이지</_.MyPageLink>
          <_.MyPageTitle>내 정보</_.MyPageTitle>

          <_.MyInfoWrapper>
            <h3>이름: {userInfo.id}</h3>
            <h3>이메일: {userInfo.email}</h3>
            <h3>
              등급:{" "}
              {userInfo.isAdmin == 1
                ? "회장"
                : userInfo.isAdmin == 2
                ? "부회장"
                : "일반 사용자"}
            </h3>
          </_.MyInfoWrapper>
        </_.Container>
      </_.MyPageWrapper>
    </div>
  );
}
