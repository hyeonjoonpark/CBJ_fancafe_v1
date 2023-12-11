import React, { useState, useEffect } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import * as _ from "./style";
import axios from "axios";

interface User {
  id: string;
  profileImage: string;
}

export default function Chat() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const id: string | null = localStorage.getItem("id");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9901/api/users/list?userId=${id}`
        );
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [id]);

  return (
    <_.ChatWrapper>
      <Header />
      <_.ChatContainer>
        <_.ChatLink>Menu 〉 채팅하기</_.ChatLink>
        <_.ChatTitle>채팅</_.ChatTitle>
        {id != null && users.length > 0 ? (
          users.map((user) => (
            <_.UserList key={user.id}>
              <_.UserMenu
                onClick={() => {
                  navigate(`/chat/@${user.id}`);
                }}
              >
                <_.UserProfile src={user.profileImage} />
                {user.id} 님
              </_.UserMenu>
            </_.UserList>
          ))
        ) : (
          <_.UserMenu style={{ marginLeft: "100px" }}>
            로그인 후 이용해주세요
          </_.UserMenu>
        )}
      </_.ChatContainer>
    </_.ChatWrapper>
  );
}
