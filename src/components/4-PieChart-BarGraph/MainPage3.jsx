import React from "react";
import { MainPage3Info } from "./MainPage3Info";
import { MainPage3Pie } from "./MainPage3Pie";
import { MainPage3Bar } from "./MainPage3Bar";

export const MainPage3 = () => {
  return (
    <>
      <div className="main-3">
        <MainPage3Info />
        <MainPage3Pie />
        <MainPage3Bar />
      </div>
    </>
  );
};
