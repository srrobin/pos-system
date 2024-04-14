import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Pos from "../components/pos/Pos";
import Error404 from "../components/Error404";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pos" element={<Pos />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
};

export default MainRoutes;
