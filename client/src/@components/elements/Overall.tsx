import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

interface OverallProps {
    rating: number;
    resultRating: number;
    remark: string;
    date: string;
}

const Overall: React.FC<OverallProps> = ({
    rating,
    resultRating,
    remark,
    date,
}) => {
    const getColor = (percentage: number) => {
        if (percentage < 50) return { pathColor: "red", textColor: "red" };
        if (percentage < 75) return { pathColor: "orange", textColor: "orange" };
        return { pathColor: "green", textColor: "green" };
    };

    const percentage = (resultRating / rating) * 100;
    const { pathColor, textColor } = getColor(percentage);

    return (
        <div className="flex flex-col lg:flex-row justify-between items-center bg-white rounded-lg p-4 shadow-md">
            <div className="flex flex-col text-center lg:text-left">
                <h3 className="text-base lg:text-lg font-bold">Overall Score</h3>
                <h2 className="text-lg lg:text-xl font-semibold mt-1">Remark: {remark}</h2>
                <h4 className="text-xs lg:text-sm text-gray-500 mt-1">Evaluated on: {date}</h4>
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-4 w-full lg:w-1/2 flex justify-center">
                <CircularProgressbar
                    value={percentage}
                    text={`${resultRating}/${rating}`}
                    styles={buildStyles({
                        pathColor,
                        textColor,
                        trailColor: "lightgrey",
                    })}
                    className="w-24 h-24 lg:w-28 lg:h-28" // Responsive width
                />
            </div>
        </div>
    );
};

export default Overall;
