import { createBrowserHistory } from "@remix-run/router";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root ";
import ContactMe from "../shared/ContactMe/ContactMe";
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
      {
        path: "/contact",
        element: <ContactMe></ContactMe>,
      },
    ],
  },
]);
