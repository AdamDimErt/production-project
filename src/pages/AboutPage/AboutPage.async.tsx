/** @format */
import React from "react";

export const AboutPageAsync = React.lazy(() =>
  import("./AboutPage").then((module) => ({
    default: module.AboutPage,
  })),
);


