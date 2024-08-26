import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

interface OverallProps {
	rating: number;
	resultRating: number;
	date: string;
}

const Overall: React.FC<OverallProps> = ({ rating, resultRating, date }) => {
	const getColor = (percentage: number) => {
		if (percentage < 50)
			return { pathColor: "red", textColor: "red", remark: "Bad" };
		if (percentage < 75)
			return { pathColor: "orange", textColor: "orange", remark: "Average" };
		return { pathColor: "green", textColor: "green", remark: "Good" };
	};

	const percentage = (resultRating / rating) * 100;
	const { pathColor, textColor, remark } = getColor(percentage);

	return (
		<div className="grid grid-cols-12 gap-4 items-center bg-white rounded-lg p-4 shadow-md">
			<div className="col-span-12 sm:col-span-7 text-center sm:text-left">
				<h3 className="text-base sm:text-lg font-bold">Overall Score</h3>
				<h2 className="text-lg sm:text-xl font-semibold mt-1">
					Remark: <span style={{ color: pathColor }}>{remark}</span>
				</h2>
				<h4 className="text-xs sm:text-sm text-gray-500 mt-1">
					Evaluated on: {date}
				</h4>
			</div>
			<div className="col-span-12 sm:col-span-5 flex justify-center">
				<CircularProgressbar
					value={percentage}
					text={`${resultRating}/${rating}`}
					styles={buildStyles({
						pathColor,
						textColor,
						trailColor: "lightgrey",
					})}
					className="w-24 h-24 sm:w-28 sm:h-28" // Responsive width
				/>
			</div>
		</div>
	);
};

export default Overall;
