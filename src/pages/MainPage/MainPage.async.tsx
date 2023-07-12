/** @format */
import React from "react";

export const MainPageAsync = React.lazy(() =>
  import("./MainPage").then((module) => ({
    default: module.MainPage,
  })),
);
