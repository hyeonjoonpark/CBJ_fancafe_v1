import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import BoardPage from "../pages/BoardPage";
import GoodsPage from "../pages/GoodsPage";
import PricePage from "../pages/PricePage";
import ChatPage from "../pages/ChatPage";

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/goods" element={<GoodsPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Switch>
    </>
  );
};

export default Router;
