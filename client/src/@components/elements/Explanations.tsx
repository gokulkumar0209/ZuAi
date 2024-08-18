
import { title1 } from "@/store/dummy";
import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Ensure to import the CSS

interface ExplanationsProps {
	percentage: number;
	data1: string;
	data2: string;
}

const Explanations: React.FC<ExplanationsProps> = ({ percentage,  data1, data2 }) => {
	const [isOpenStrength, setIsOpenStrength] = useState(false);
	const [isOpenImprovement, setIsOpenImprovement] = useState(false);

	const getColor = (percentage: number) => {
		if (percentage < 50) return { pathColor: "red", textColor: "red" };
		if (percentage < 75) return { pathColor: "orange", textColor: "orange" };
		return { pathColor: "green", textColor: "green" };
	};

	const { pathColor, textColor } = getColor(percentage);

	return (
		<div className="bg-yellow-400 p-4">
			<div className="flex justify-around bg-white m-2 rounded-lg p-4">
				<CircularProgressbar
					className="w-24 m-2"
					value={percentage}
					text={`${percentage}%`}
					styles={buildStyles({
						pathColor,
						textColor,
						trailColor: "lightgrey",
					})}
				/>
				<div className="flex flex-col justify-between">
					<div>
						<h2 className="text-xl font-semibold">Criteria A</h2>
						<h3 className="text-lg">Understanding knowledge questions</h3>
					</div>
					<div className="m-2 text-center">
						{isOpenStrength || isOpenImprovement ? (
							<button
								onClick={() => {
									setIsOpenStrength(false);
									setIsOpenImprovement(false);
								}}
								className="text-xl font-bold"
							>
								&uarr; {/* Up Arrow */}
							</button>
						) : (
							<button
								onClick={() => {
									setIsOpenStrength(true);
									setIsOpenImprovement(true);
								}}
								className="text-xl font-bold"
							>
								&darr; {/* Down Arrow */}
							</button>
						)}
					</div>
				</div>
			</div>
			<div className="m-2">
				<div>
					<p className="text-base font-medium">{title1}</p>
				</div>
				{isOpenStrength && (
					<div>
						<h2 className="text-xl font-semibold">Strength</h2>
						<ul className="list-disc pl-5">
							<li>{data1}</li>
							<li>{data2}</li>
						</ul>
					</div>
				)}
				{isOpenImprovement && (
					<div>
						<h2 className="text-xl font-semibold">Scope For Improvement</h2>
						<ul className="list-disc pl-5">
							<li>{data1}</li>
							<li>{data2}</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Explanations;
