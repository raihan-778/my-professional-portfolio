import { createBrowserHistory } from "@remix-run/router";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root ";
import Home from "../shared/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path:"/Contact",
      //   element:<Home></Home>
      // },
    ],
  },
]);
