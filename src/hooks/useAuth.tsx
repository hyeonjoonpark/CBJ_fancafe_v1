import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { login } from "../axios";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    if (access && refresh) {
      setIsLoggedIn(true); // 로그인 성공 시 isLoggedIn을 true로 설정
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleInputId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleInputPw = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { access, refresh, message } = await login(id, email, password);
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      localStorage.setItem("id", id);
      localStorage.setItem("email", email);
      // setIsLoggedIn((prev) => !prev); // 로그인 성공 시 isLoggedIn을 true로 설정
      console.log(id, email, message, isLoggedIn);
      window.location.replace("/chat");
    } catch (error) {
      console.log("로그인에 실패했습니다.", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    window.location.replace("/");
  };

  return {
    id,
    email,
    password,
    handleInputId,
    handleInputEmail,
    handleInputPw,
    handleLoginSubmit,
    handleLogout,
    isLoggedIn,
  };
};
