import React from "react";

export const MainPage3Info = () => {
  const data = [
    {
      course: "course a ",
      courseData: "23 Workers Took This Course This Week",
    },
    {
      course: "course b ",
      courseData: "253 Workers Took This Course This Week",
    },
    {
      course: "course c ",
      courseData: "253 Workers Took This Course This Week",
    },
    {
      course: "course d ",
      courseData: "253 Workers Took This Course This Week",
    },
  ];

  const dataLength = data.length - 1;
  console.log(dataLength);
  return (
    <>
      <div className="info-box">
        <h5>Monthly Training Activity</h5>
        <div className="enrolles-data">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <path
              d="M7.96944 3.73266L7.96944 13.9275"
              stroke="#018E42"
              stroke-width="1.63117"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.87494 7.84442L7.96917 3.73252L12.0641 7.84442"
              stroke="#018E42"
              stroke-width="1.63117"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>16% more enrolles this month</div>
        </div>
        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="info-1">
                {dataLength !== index ? (
                  <span className="info-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <circle
                        cx="8.72982"
                        cy="8.73507"
                        r="7.34026"
                        fill="white"
                        stroke="#0D62FF"
                        strokeWidth="1.63117"
                      />
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <circle
                        cx="8.72982"
                        cy="8.73507"
                        r="7.34026"
                        fill="white"
                        stroke="#0D62FF"
                        strokeWidth="1.63117"
                      />
                    </svg>
                  </span>
                )}
                <span>{item.course}</span>
              </div>
              <div className="info-2">{item.courseData}</div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};
