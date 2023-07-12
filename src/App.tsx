/** @format */

import { Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { Route } from "react-router-dom";
import "./styles/index.scss";

import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense, useContext, useState } from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



export const App = () => {

    const {theme,toggleTheme} = useTheme();
  return (
    <div className={classNames('app',{hovered:true,selected:false},[theme,'cl2','cl3'])}>
      <button onClick={toggleTheme}> toggleTheme</button>
      <Link to={"/about"}>about</Link>
      <Link to={"/"}>home</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path={"/about"}
            element={<AboutPageAsync />}
          />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
