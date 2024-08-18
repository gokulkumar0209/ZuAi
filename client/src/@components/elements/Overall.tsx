import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
interface OverallProps {
	percentage: number;
    remark: string
    date: string
}
const Overall: React.FC<OverallProps> = ({ percentage, remark, date }) => {
	const getColor = (percentage: number) => {
		if (percentage < 50) return { pathColor: "red", textColor: "red" };
		if (percentage < 75) return { pathColor: "orange", textColor: "orange" };
		return { pathColor: "green", textColor: "green" };
	};

	const { pathColor, textColor } = getColor(percentage);
	return (
		<div className=" flex justify-between bg-white rounded-lg m-2">
			<div>
				<h3>Overall Score</h3>
				<h2>Remarks: {remark}</h2>
				<h4>Evaluated on:{date}</h4>
			</div>
			<CircularProgressbar
				className=" w-28 m-2"
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
