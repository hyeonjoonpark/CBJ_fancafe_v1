import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Switch>
    </>
  );
};

export default Router;
