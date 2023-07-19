import React from "react";

export const MainPage2Bar = () => {
  const data = [
    { score: 230, day: "3 Jun" },
    { score: 100, day: "4 Jun" },
    { score: 300, day: "5 Jun" },
    { score: 120, day: "6 Jun" },
    { score: 239, day: "7 Jun" },
    { score: 232, day: "8 Jun" },
    { score: 370, day: "9 Jun" },
    { score: 34, day: "10 Jun" },
    { score: 270, day: "11 Jun" },
    { score: 352, day: "12 Jun" },
    { score: 45, day: "13 Jun" },
    { score: 310, day: "14 Jun" },
  ];
  return (
    <>
      <div className="bar-graph-cont">
        <div className="bar-head">
          <div className="bar-head-1">
            Last 14 Days Active Workers In Training
          </div>
          <div className="bar-head-2">Last 14 days</div>
        </div>
        <div className="bar-parent">
          <span className="bar-scale">
            <div>400</div>
            <div>300</div>
            <div>200</div>
            <div>100</div>
            <div>0</div>
          </span>
          <span className="bars-c">
            <span className="bargraph-bars">
              {data.map((i) => {
                return (
                  <>
                    <div className="bar-body">
                      <svg
                        width="18"
                        height="258"
                        viewBox="0 0 18 258"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 249L9 9.00001"
                          stroke="#E7EFFF"
                          stroke-width="18"
                          stroke-linecap="round"
                        />
                        <path
                          // d="M9 249L9 158"
                          d={`M9 249L9 ${258 - (i.score / 400) * 258}`}
                          stroke="#0D62FF"
                          stroke-width="18"
                          stroke-linecap="round"
                        />
                      </svg>
                      <div className="bar-date">{i.day}</div>
                    </div>
                  </>
                );
              })}
            </span>
          </span>
        </div>
      </div>
    </>
  );
};
