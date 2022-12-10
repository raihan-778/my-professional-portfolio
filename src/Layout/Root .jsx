import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../shared/Home/Home";
import Navber from "../shared/Navber/Navber";

const Root = () => {
  return (
    <div className="w-full">
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
