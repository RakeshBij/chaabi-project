import React from "react";

export const Mainpage1 = () => {
  const data = [
    { head: "In training Workers", num: "3,354", num1: "234", state: "green" },
    {
      head: "Video Watch-Time (Hrs)",
      num: "2,433",
      num1: "435",
      state: "red",
    },
    {
      head: "% Workers Passing Quiz",
      num: "95%",
      num1: "24%",
      state: "green",
    },
    { head: "Avg. Days Taken", num: "6", num1: "3", state: "green" },
  ];
  return (
    <>
      <div className="main-page-cont">
        {data.map((i) => {
          return (
            <span className="mainPage-1">
              <h5 className="mp-1-heading">{i.head}</h5>
              <div className="mp-1-body">
                <div className="mp-1-data">
                  <div className="mp-1-data-1">{i.num}</div>
                  <div className="mp-1-data-2">
                    <div className="mp-1-data-2-1">
                      {" "}
                      <div
                        className={
                          i.state === "green"
                            ? "mp-1-data-2-1-1 green-back"
                            : "mp-1-data-2-1-1 red-back"
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M4.99998 10.1667C4.87331 10.1667 4.74665 10.12 4.64665 10.02C4.45331 9.82667 4.45331 9.50667 4.64665 9.31334L6.77998 7.18001C6.88665 7.07334 7.02665 7.02001 7.17998 7.03334C7.32665 7.04667 7.45998 7.12667 7.54665 7.25334L8.27331 8.34667L10.64 5.98001C10.8333 5.78667 11.1533 5.78667 11.3466 5.98001C11.54 6.17334 11.54 6.49334 11.3466 6.68667L8.54665 9.48667C8.43998 9.59334 8.29998 9.64667 8.14665 9.63334C7.99998 9.62001 7.86665 9.54001 7.77998 9.41334L7.05331 8.32001L5.35331 10.02C5.25331 10.12 5.12665 10.1667 4.99998 10.1667Z"
                            fill={i.state === "green" ? "#018E42" : "#ED1C24"}
                          />
                          <path
                            d="M11 8.16666C10.7267 8.16666 10.5 7.94 10.5 7.66666V6.83333H9.66669C9.39335 6.83333 9.16669 6.60666 9.16669 6.33333C9.16669 6.05999 9.39335 5.83333 9.66669 5.83333H11C11.2734 5.83333 11.5 6.05999 11.5 6.33333V7.66666C11.5 7.94 11.2734 8.16666 11 8.16666Z"
                            fill={i.state === "green" ? "#018E42" : "#ED1C24"}
                          />
                          <path
                            d="M9.99998 15.1667H5.99998C2.37998 15.1667 0.833313 13.62 0.833313 10V6.00001C0.833313 2.38001 2.37998 0.833344 5.99998 0.833344H9.99998C13.62 0.833344 15.1666 2.38001 15.1666 6.00001V10C15.1666 13.62 13.62 15.1667 9.99998 15.1667ZM5.99998 1.83334C2.92665 1.83334 1.83331 2.92668 1.83331 6.00001V10C1.83331 13.0733 2.92665 14.1667 5.99998 14.1667H9.99998C13.0733 14.1667 14.1666 13.0733 14.1666 10V6.00001C14.1666 2.92668 13.0733 1.83334 9.99998 1.83334H5.99998Z"
                            fill={i.state === "green" ? "#018E42" : "#ED1C24"}
                          />
                        </svg>
                        <span
                          style={{
                            color: i.state === "green" ? "#018E42" : "#ED1C24",
                          }}
                        >
                          20%
                        </span>
                      </div>
                    </div>
                    <div className="mp-1-data-2-2">{i.num1}</div>
                  </div>
                </div>
                <div className="mp-1-chart">
                  {i.state === "green" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="128"
                      height="80"
                      viewBox="0 0 128 80"
                      fill="none"
                    >
                      <path
                        d="M0 79.5L21.2505 12.38L43.5 40H58.5L85.258 0.300018L106.594 28.94L127.5 79.5"
                        fill="url(#paint0_linear_1_189)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_189"
                          x1="63.75"
                          y1="-3.05169e-05"
                          x2="63.75"
                          y2="88"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#018E42" />
                          <stop offset="1" stop-color="#F9F9F9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="128"
                      height="80"
                      viewBox="0 0 128 80"
                      fill="none"
                    >
                      <path
                        d="M-1.90735e-06 79.5L21.2505 12.38L43.5 40H58.5L85.258 0.300018L106.594 28.94L127.5 79.5"
                        fill="url(#paint0_linear_1_131)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_131"
                          x1="63.75"
                          y1="-3.05169e-05"
                          x2="63.75"
                          y2="88"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#ED1C24" />
                          <stop offset="1" stop-color="#F9F9F9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}

                  <div className="mp-1-chart-days">
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                    <div>S</div>
                  </div>
                </div>
              </div>
            </span>
          );
        })}
        {/* <span className="mainPage-1">
          <h5 className="mp-1-heading">In Training Workers</h5>
          <div className="mp-1-body">
            <div className="mp-1-data">
              <div className="mp-1-data-1">6</div>
              <div className="mp-1-data-2">
                <div className="mp-1-data-2-1">
                  {" "}
                  <div className="mp-1-data-2-1-1 green-back">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4.99998 10.1667C4.87331 10.1667 4.74665 10.12 4.64665 10.02C4.45331 9.82667 4.45331 9.50667 4.64665 9.31334L6.77998 7.18001C6.88665 7.07334 7.02665 7.02001 7.17998 7.03334C7.32665 7.04667 7.45998 7.12667 7.54665 7.25334L8.27331 8.34667L10.64 5.98001C10.8333 5.78667 11.1533 5.78667 11.3466 5.98001C11.54 6.17334 11.54 6.49334 11.3466 6.68667L8.54665 9.48667C8.43998 9.59334 8.29998 9.64667 8.14665 9.63334C7.99998 9.62001 7.86665 9.54001 7.77998 9.41334L7.05331 8.32001L5.35331 10.02C5.25331 10.12 5.12665 10.1667 4.99998 10.1667Z"
                        fill="#018E42"
                      />
                      <path
                        d="M11 8.16666C10.7267 8.16666 10.5 7.94 10.5 7.66666V6.83333H9.66669C9.39335 6.83333 9.16669 6.60666 9.16669 6.33333C9.16669 6.05999 9.39335 5.83333 9.66669 5.83333H11C11.2734 5.83333 11.5 6.05999 11.5 6.33333V7.66666C11.5 7.94 11.2734 8.16666 11 8.16666Z"
                        fill="#018E42"
                      />
                      <path
                        d="M9.99998 15.1667H5.99998C2.37998 15.1667 0.833313 13.62 0.833313 10V6.00001C0.833313 2.38001 2.37998 0.833344 5.99998 0.833344H9.99998C13.62 0.833344 15.1666 2.38001 15.1666 6.00001V10C15.1666 13.62 13.62 15.1667 9.99998 15.1667ZM5.99998 1.83334C2.92665 1.83334 1.83331 2.92668 1.83331 6.00001V10C1.83331 13.0733 2.92665 14.1667 5.99998 14.1667H9.99998C13.0733 14.1667 14.1666 13.0733 14.1666 10V6.00001C14.1666 2.92668 13.0733 1.83334 9.99998 1.83334H5.99998Z"
                        fill="#018E42"
                      />
                    </svg>
                    <span style={{ color: "#018E42" }}>20%</span>
                  </div>
                </div>
                <div className="mp-1-data-2-2">3</div>
              </div>
            </div>
            <div className="mp-1-chart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="80"
                viewBox="0 0 128 80"
                fill="none"
              >
                <path
                  d="M0 79.5L21.2505 12.38L43.5 40H58.5L85.258 0.300018L106.594 28.94L127.5 79.5"
                  fill="url(#paint0_linear_1_189)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_189"
                    x1="63.75"
                    y1="-3.05169e-05"
                    x2="63.75"
                    y2="88"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#018E42" />
                    <stop offset="1" stop-color="#F9F9F9" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="mp-1-chart-days">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
            </div>
          </div>
        </span>
        <span className="mainPage-1">
          <h5 className="mp-1-heading">In Training Workers</h5>
          <div className="mp-1-body">
            <div className="mp-1-data">
              <div className="mp-1-data-1">6</div>
              <div className="mp-1-data-2">
                <div className="mp-1-data-2-1">
                  {" "}
                  <div className="mp-1-data-2-1-1 green-back">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4.99998 10.1667C4.87331 10.1667 4.74665 10.12 4.64665 10.02C4.45331 9.82667 4.45331 9.50667 4.64665 9.31334L6.77998 7.18001C6.88665 7.07334 7.02665 7.02001 7.17998 7.03334C7.32665 7.04667 7.45998 7.12667 7.54665 7.25334L8.27331 8.34667L10.64 5.98001C10.8333 5.78667 11.1533 5.78667 11.3466 5.98001C11.54 6.17334 11.54 6.49334 11.3466 6.68667L8.54665 9.48667C8.43998 9.59334 8.29998 9.64667 8.14665 9.63334C7.99998 9.62001 7.86665 9.54001 7.77998 9.41334L7.05331 8.32001L5.35331 10.02C5.25331 10.12 5.12665 10.1667 4.99998 10.1667Z"
                        fill="#018E42"
                      />
                      <path
                        d="M11 8.16666C10.7267 8.16666 10.5 7.94 10.5 7.66666V6.83333H9.66669C9.39335 6.83333 9.16669 6.60666 9.16669 6.33333C9.16669 6.05999 9.39335 5.83333 9.66669 5.83333H11C11.2734 5.83333 11.5 6.05999 11.5 6.33333V7.66666C11.5 7.94 11.2734 8.16666 11 8.16666Z"
                        fill="#018E42"
                      />
                      <path
                        d="M9.99998 15.1667H5.99998C2.37998 15.1667 0.833313 13.62 0.833313 10V6.00001C0.833313 2.38001 2.37998 0.833344 5.99998 0.833344H9.99998C13.62 0.833344 15.1666 2.38001 15.1666 6.00001V10C15.1666 13.62 13.62 15.1667 9.99998 15.1667ZM5.99998 1.83334C2.92665 1.83334 1.83331 2.92668 1.83331 6.00001V10C1.83331 13.0733 2.92665 14.1667 5.99998 14.1667H9.99998C13.0733 14.1667 14.1666 13.0733 14.1666 10V6.00001C14.1666 2.92668 13.0733 1.83334 9.99998 1.83334H5.99998Z"
                        fill="#018E42"
                      />
                    </svg>
                    <span style={{ color: "#018E42" }}>20%</span>
                  </div>
                </div>
                <div className="mp-1-data-2-2">3</div>
              </div>
            </div>
            <div className="mp-1-chart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="80"
                viewBox="0 0 128 80"
                fill="none"
              >
                <path
                  d="M0 79.5L21.2505 12.38L43.5 40H58.5L85.258 0.300018L106.594 28.94L127.5 79.5"
                  fill="url(#paint0_linear_1_189)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_189"
                    x1="63.75"
                    y1="-3.05169e-05"
                    x2="63.75"
                    y2="88"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#018E42" />
                    <stop offset="1" stop-color="#F9F9F9" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="mp-1-chart-days">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
            </div>
          </div>
        </span>
        <span className="mainPage-1">
          <h5 className="mp-1-heading">In Training Workers</h5>
          <div className="mp-1-body">
            <div className="mp-1-data">
              <div className="mp-1-data-1">6</div>
              <div className="mp-1-data-2">
                <div className="mp-1-data-2-1">
                  {" "}
                  <div className="mp-1-data-2-1-1 green-back">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4.99998 10.1667C4.87331 10.1667 4.74665 10.12 4.64665 10.02C4.45331 9.82667 4.45331 9.50667 4.64665 9.31334L6.77998 7.18001C6.88665 7.07334 7.02665 7.02001 7.17998 7.03334C7.32665 7.04667 7.45998 7.12667 7.54665 7.25334L8.27331 8.34667L10.64 5.98001C10.8333 5.78667 11.1533 5.78667 11.3466 5.98001C11.54 6.17334 11.54 6.49334 11.3466 6.68667L8.54665 9.48667C8.43998 9.59334 8.29998 9.64667 8.14665 9.63334C7.99998 9.62001 7.86665 9.54001 7.77998 9.41334L7.05331 8.32001L5.35331 10.02C5.25331 10.12 5.12665 10.1667 4.99998 10.1667Z"
                        fill="#018E42"
                      />
                      <path
                        d="M11 8.16666C10.7267 8.16666 10.5 7.94 10.5 7.66666V6.83333H9.66669C9.39335 6.83333 9.16669 6.60666 9.16669 6.33333C9.16669 6.05999 9.39335 5.83333 9.66669 5.83333H11C11.2734 5.83333 11.5 6.05999 11.5 6.33333V7.66666C11.5 7.94 11.2734 8.16666 11 8.16666Z"
                        fill="#018E42"
                      />
                      <path
                        d="M9.99998 15.1667H5.99998C2.37998 15.1667 0.833313 13.62 0.833313 10V6.00001C0.833313 2.38001 2.37998 0.833344 5.99998 0.833344H9.99998C13.62 0.833344 15.1666 2.38001 15.1666 6.00001V10C15.1666 13.62 13.62 15.1667 9.99998 15.1667ZM5.99998 1.83334C2.92665 1.83334 1.83331 2.92668 1.83331 6.00001V10C1.83331 13.0733 2.92665 14.1667 5.99998 14.1667H9.99998C13.0733 14.1667 14.1666 13.0733 14.1666 10V6.00001C14.1666 2.92668 13.0733 1.83334 9.99998 1.83334H5.99998Z"
                        fill="#018E42"
                      />
                    </svg>
                    <span style={{ color: "#018E42" }}>20%</span>
                  </div>
                </div>
                <div className="mp-1-data-2-2">3</div>
              </div>
            </div>
            <div className="mp-1-chart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="80"
                viewBox="0 0 128 80"
                fill="none"
              >
                <path
                  d="M0 79.5L21.2505 12.38L43.5 40H58.5L85.258 0.300018L106.594 28.94L127.5 79.5"
                  fill="url(#paint0_linear_1_189)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_189"
                    x1="63.75"
                    y1="-3.05169e-05"
                    x2="63.75"
                    y2="88"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#018E42" />
                    <stop offset="1" stop-color="#F9F9F9" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="mp-1-chart-days">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
            </div>
          </div>
        </span> */}
      </div>
    </>
  );
};
