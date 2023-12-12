import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import BoardPage from "../pages/BoardPage";
import GoodsPage from "../pages/GoodsPage";
import PricePage from "../pages/PricePage";
import SignUpPage from "../pages/SignUpPage";
import ProfileUpload from "../components/Profile/Upload";
import GoodsUploadPage from "../pages/GoodsUploadPage";
import WritePage from "../pages/WritePage";

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
        <Route path="/profile" element={<ProfileUpload />} />
        <Route path="/goods/upload" element={<GoodsUploadPage />} />
        <Route path="/board/write" element={<WritePage />} />
      </Switch>
    </>
  );
};

export default Router;
