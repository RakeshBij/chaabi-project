import React from "react";

export const MainPage3Bar = () => {
  const data = [
    { lb: 60, db: 40, day: "S" },
    { lb: 90, db: 32, day: "M" },
    { lb: 132, db: 87, day: "T" },
    { lb: 110, db: 56, day: "W" },
    { lb: 40, db: 10, day: "T" },
    { lb: 155, db: 99, day: "F" },
    { lb: 77, db: 35, day: "S" },
  ];
  return (
    <>
      <div className="bar-box-3">
        <div className="bar-head">
          <div className="bar-head-1">Daily Training Completions</div>
          <div className="bar-head-2 bar-head-3-1">Last 7 days</div>
        </div>
        <div className="bar-3">
          <div className="bar-3-data">
            <div>160</div>
            <div>120</div>
            <div>80</div>
            <div>40</div>
            <div>0</div>
          </div>
          {data.map((i) => {
            return (
              <>
                <div className="blue-bar">
                  <svg
                    width="11"
                    height="185"
                    viewBox="4 -185 5 185"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="8"
                      x2="8"
                      y2={`-${i.lb}`}
                      stroke="#E7EFFF"
                      stroke-width="8"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="8"
                      y1="0"
                      x2="8"
                      y2={`-${i.db}`}
                      stroke="#0D62FF"
                      stroke-width="8"
                    ></line>
                  </svg>
                  <div className="blue-bar-day">{i.day}</div>
                </div>
              </>
            );
          })}
        </div>
        <div className="bar-3-body">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
          <div className="line line-5"></div>
        </div>
      </div>
    </>
  );
};
