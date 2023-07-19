import React, { useState } from "react";
import { CChart } from "@coreui/react-chartjs";

const getStyle = (styleVariable) => {
  // Define your implementation of the getStyle function here
  // It should return the value of the specified style variable
  // You can use CSS custom properties or any other method to retrieve the style value
  // For example, using CSS custom properties:
  return getComputedStyle(document.documentElement).getPropertyValue(
    styleVariable
  );
};

export const MainPage3Pie = () => {
  const [passed, setPassed] = useState(1423);
  const [failed, setFailed] = useState(134);

  const total = passed + failed;
  const passedPercentage = (passed / total) * 100;
  const failedPercentage = (failed / total) * 100;
  console.log(passedPercentage, failedPercentage);

  return (
    <>
      <div className="pie-box-3">
        <h5>Quiz Passing %</h5>
        <span className="pie-chart-3">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="196"
            height="196"
            viewBox="0 0 196 196"
            fill="none"
          >
            <path
              d="M196 98C196 118.696 189.448 138.86 177.284 155.603C165.119 172.346 147.966 184.808 128.284 191.204C108.601 197.599 87.3989 197.599 67.7163 191.204C48.0336 184.808 30.8808 172.346 18.7163 155.603L50.4297 132.562C57.7285 142.608 68.0201 150.085 79.8297 153.922C91.6393 157.759 104.361 157.759 116.17 153.922C127.98 150.085 138.271 142.608 145.57 132.562C152.869 122.516 156.8 110.417 156.8 98H196Z"
              fill="#ED1C24"
              style={{
                transform: `rotate(91.39deg)`,
              }}
            />
            <path
              d="M67.3352 4.92116C82.074 0.0654353 97.7554 -1.22073 113.088 1.16852C128.422 3.55777 142.968 9.55412 155.531 18.6641C168.094 27.774 178.313 39.7371 185.349 53.5686C192.385 67.4002 196.035 82.7049 196 98.223L156.8 98.1338C156.821 88.8229 154.631 79.6401 150.409 71.3412C146.188 63.0422 140.056 55.8644 132.518 50.3984C124.981 44.9325 116.253 41.3347 107.053 39.9011C97.8532 38.4676 88.4444 39.2393 79.6011 42.1527L67.3352 4.92116Z"
              fill="#018E42"
              style={{
                transform: `rotate(8.61deg)`,
              }}
            />
          </svg> */}
          <CChart
            type="doughnut"
            data={{
              datasets: [
                {
                  backgroundColor: ["#018E42", "#ED1C24"],
                  data: [passedPercentage, failedPercentage],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: getStyle("--cui-body-color"),
                  },
                },
                tooltip: {
                  enabled: false, // Disable tooltips
                },
              },
              cutoutPercentage: 80,
              radius: "70%",
              rotation: "90",

              hover: {
                mode: null, // Disable hover mode
              },
            }}
            style={{ width: "250px", marginLeft: "-20px", marginTop: "-10px" }}
          />
          <span className="pie-data-3">
            <div className="pie-data-3-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <circle cx="5.74026" cy="6.49999" r="5.74032" fill="#018E42" />
              </svg>
              <div>
                <div className="passed">passed</div>
                <div className="passed-data">{passed} Workers</div>
              </div>
            </div>
            <div className="pie-data-3-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <circle cx="5.74026" cy="6.49999" r="5.74032" fill="#ED1C24" />
              </svg>
              <div>
                <div className="passed">failed</div>
                <div className="passed-data">{failed} Workers</div>
              </div>
            </div>
          </span>
        </span>
      </div>
    </>
  );
};
