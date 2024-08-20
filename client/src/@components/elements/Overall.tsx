import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

interface OverallProps {
  percentage: number;
  remark: string;
  date: string;
}

const Overall: React.FC<OverallProps> = ({ percentage, remark, date }) => {
  const getColor = (percentage: number) => {
    if (percentage < 50) return { pathColor: "red", textColor: "red" };
    if (percentage < 75) return { pathColor: "orange", textColor: "orange" };
    return { pathColor: "green", textColor: "green" };
  };

  const { pathColor, textColor } = getColor(percentage);
  return (
    <div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-md">
      <div>
        <h3 className="text-lg font-bold">Overall Score</h3>
        <h2 className="text-xl">Remark: {remark}</h2>
        <h4 className="text-sm text-gray-500">Evaluated on: {date}</h4>
      </div>
      <CircularProgressbar
        className="w-28"
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor,
          textColor,
          trailColor: "lightgrey",
        })}
      />
    </div>
  );
};

export default Overall;
