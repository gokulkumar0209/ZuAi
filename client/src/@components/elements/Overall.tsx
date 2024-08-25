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
		<div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-md">
			<div>
				<h3 className="text-lg font-bold">Overall Score</h3>
				<h2 className="text-xl">Remark: {remark}</h2>
				<h4 className="text-sm text-gray-500">Evaluated on: {date}</h4>
			</div>
			<CircularProgressbar
				className="w-28"
				value={percentage}
				text={`${resultRating}/${rating}`}
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
