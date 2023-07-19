import React from "react";
import Sidebar from "./components/0-sidebar/Sidebar";
import "./App.css";
import { MainPage } from "./components/1-combining/MainPage";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <div className="head-cont">
          {/* <div className="circle1"></div>
          <div className="circle2"></div> */}

          <h1 className="poppins c-white">Hello, Puneet Dhiman</h1>
          <p className="c-white poppins">
            Following Is Your Organization’s Performance Summary
          </p>
        </div>
        <MainPage />
      </div>
    </div>
  );
};

export default App;
