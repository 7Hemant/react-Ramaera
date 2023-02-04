import React from "react";
import { Route, Routes } from "react-router-dom";
import Nitro from "../pages/Nitro";
import Friends from "../pages/Friends";
import MessageRequests from "../pages/MessageRequests";

const Routers = () => {
  return (
    <Routes>
      <Route element={<Friends />} path="/friends" />
      <Route element={<Nitro />} path="/nitro" />
      <Route element={<MessageRequests />} path="/message" />
    </Routes>
  );
};

export default Routers;
