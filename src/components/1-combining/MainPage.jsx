import React from "react";
import { Mainpage1 } from "../2-First-graph/Mainpage1";
import { MainPage2 } from "../3-Info-pie-bar/MainPage2";
import { MainPage3 } from "../4-PieChart-BarGraph/MainPage3";

export const MainPage = () => {
  return (
    <>
      <div className="some">
        <Mainpage1 />
        <MainPage2 />
        <MainPage3 />
      </div>
    </>
  );
};
