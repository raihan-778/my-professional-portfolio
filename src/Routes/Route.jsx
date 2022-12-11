import { createBrowserHistory } from "@remix-run/router";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root ";
import AboutMe from "../shared/AboutMe/AboutMe";
import ContactMe from "../shared/ContactMe/ContactMe";
import Home from "../shared/Home/Home";
import BanglaDish from "../shared/Home/MyProjects/AllProjectDetails/BanglaDish";
import FunQuiz from "../shared/Home/MyProjects/AllProjectDetails/FunQuiz";
import UsedProducts from "../shared/Home/MyProjects/AllProjectDetails/UsedProducts";
import MyBlog from "../shared/MyBlog/MyBlog";

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
      {
        path: "/used-product",
        element: <UsedProducts></UsedProducts>,
      },
      {
        path: "/bangla-dish",
        element: <BanglaDish></BanglaDish>,
      },
      {
        path: "/fun-quiz",
        element: <FunQuiz></FunQuiz>,
      },
      {
        path: "/about-me",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/my-blog",
        element: <MyBlog></MyBlog>,
      },
    ],
  },
]);
