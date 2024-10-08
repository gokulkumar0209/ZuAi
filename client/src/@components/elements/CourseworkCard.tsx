import React from "react";
import { useNavigate } from "react-router-dom";

interface CourseworkCardProps {
	file: {
		id: string;
		name: string;
		content: string;
		title: React.ReactNode;
		subject?: string;
		course: string;
		rating: number;
		resultRating: number;
		language: string;
		words: number;
		timeToRead: number;
		criteria: any;
		review: string;
		timestamp: string;
		image: string | undefined;
	};
}

const CourseworkCard: React.FC<CourseworkCardProps> = ({ file }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		localStorage.setItem("lastSelected", file.id);
		navigate("/result");
	};

	return (
		<div
			key={file.id}
			className="bg-white shadow-md rounded-lg flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 p-4"
			style={{ maxWidth: "440px", height: "auto" }}
			onClick={handleClick}
		>
			{/* Image hidden on screens smaller than lg */}
			<div className="w-full lg:w-1/4">
				{file.image && (
					<img
						src={file.image}
						alt={file.title as string}
						className="w-full h-auto rounded-lg hidden lg:block"
					/>
				)}
			</div>
			<div className="w-full lg:w-3/4">
				<h2 className="text-md font-bold text-gray-800 truncate">
					{file.title}
				</h2>
				<p className="text-gray-600 mt-1 text-sm truncate">
					How does the temperature of a Copper pipe affect the time it takes a magnet to fall through it?
				</p>
				<div className="grid grid-cols-2 sm:grid-cols-3 text-xs text-gray-500 mt-2 gap-2">
					<span>🧔🏻{file.subject || "Other"}</span>
					<span>
						⭐ {file.resultRating}/{file.rating}
					</span>
					<span>📄 {file.words} words</span>
					<span>🗣️ {file.language}</span>
					<span>⏱️ {file.timeToRead} min read</span>
				</div>
			</div>
		</div>
	);
};

export default CourseworkCard;
