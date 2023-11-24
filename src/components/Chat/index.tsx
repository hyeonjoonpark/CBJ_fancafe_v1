import React, { useState, useEffect } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as _ from "./style";

interface User {
  id: string;
  profileImage: string;
}

export default function Chat() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9901/api/users?id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("acc_token")}`,
            },
          }
        );
        setUsers(response.data.data);
      } catch (error) {
        console.error(error);
        alert("사용자 목록을 불러오는 중 오류가 발생했습니다.");
      }
    };

    if (!id) {
      alert("로그인 후 이용해주세요.");
      navigate("/login");
    } else {
      fetchUserList();
    }
  }, [navigate, id]);

  return (
    <_.ChatWrapper>
      <Header />
      <_.ChatContainer>
        <_.ChatLink>Menu 〉 채팅하기</_.ChatLink>
        <_.ChatTitle>채팅</_.ChatTitle>
        {users &&
          users.length > 0 &&
          users.map((user) => (
            <_.UserList>
              <_.UserMenu
                key={user.id}
                onClick={() => {
                  navigate(`/chat/@${user.id}`);
                }}
              >
                <_.UserProfile src={user.profileImage} />
                {user.id} 님
              </_.UserMenu>
            </_.UserList>
          ))}
      </_.ChatContainer>
    </_.ChatWrapper>
  );
}
