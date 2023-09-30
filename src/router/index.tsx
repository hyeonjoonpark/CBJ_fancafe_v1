import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import BoardPage from "../pages/BoardPage";
import GoodsPage from "../pages/GoodsPage";
import PricePage from "../pages/PricePage";
import ChatPage from "../pages/ChatPage";
import User from "../components/Chat/User";
import SignUpPage from "../pages/SignUpPage";
import ProfileUpload from "../components/Profile/Upload";

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/goods" element={<GoodsPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/:id" element={<User />} />
        <Route path="/profile" element={<ProfileUpload />} />
      </Switch>
    </>
  );
};

export default Router;
