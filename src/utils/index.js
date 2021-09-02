import React from "react";
import Home from "../page/Home";
import Gallery from "../page/Gallery";
import User from "../page/User";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import Tensorflow from "../page/tensorflow";


export default [
    {
      path: "/",
      exact: true,
      component: () => <Home />,
      protected: null,
    },
    {
      path: "/gallery",
      component: () => <Gallery />,
      protected: "auth",
    },
    {
      path: "/user",
      component: () => <User />,
      protected: "auth",
    },
    {
      path: "/login",
      component: () => <Login />,
      protected: "guest",
    },
    {
      path: "/signup",
      component: () => <SignUp />,
      protected: "guest",
    },
    {
      path: "/tensorflow",
      component: () => <Tensorflow />,
      protected: null,
    }
]    