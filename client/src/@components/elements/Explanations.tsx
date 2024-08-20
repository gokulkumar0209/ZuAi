import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

interface ExplanationsProps {
  percentage: number;
  data1: string;
  data2: string;
}

const Explanations: React.FC<ExplanationsProps> = ({ percentage, data1, data2 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getColor = (percentage: number) => {
    if (percentage < 50) return { pathColor: "red", textColor: "red" };
    if (percentage < 75) return { pathColor: "orange", textColor: "orange" };
    return { pathColor: "green", textColor: "green" };
  };

  const { pathColor, textColor } = getColor(percentage);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <CircularProgressbar
            className="w-16 h-16"
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathColor,
              textColor,
              trailColor: "lightgrey",
            })}
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Criteria A</h2>
            <p className="text-gray-600">Understanding Knowledge Questions</p>
          </div>
        </div>
        <button
          className="text-lg font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "↑" : "↓"}
        </button>
      </div>
      {isOpen && (
        <div className="mt-4">
          <h3 className="font-semibold">Strength</h3>
          <ul className="list-disc ml-5">
            <li>{data1}</li>
            <li>{data2}</li>
          </ul>
          <h3 className="font-semibold mt-4">Scope for Improvement</h3>
          <ul className="list-disc ml-5">
            <li>{data1}</li>
            <li>{data2}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Explanations;
