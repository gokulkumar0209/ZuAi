import { ReactNode, useEffect, useState } from "react";
import CourseworkCard from "./CourseworkCard"; // Adjust the import path as necessary

interface FileData {
	id: string;
	name: string;
	content: string;
	title: ReactNode;
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
}

function History() {
	const [data, setData] = useState<FileData[]>([]);
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		const dummy = localStorage.getItem("history");
		if (dummy) {
			setData(JSON.parse(dummy));
		}
	}, []);

	const displayedData = showAll ? data : data.slice(0, 2);

	return (
		<div className="p-2">
			<div className="grid grid-cols-2 gap-4">
				{displayedData.length > 0 ? (
					displayedData.map((file) => (
						<CourseworkCard key={file.id} file={file} />
					))
				) : (
					<div>No history found</div>
				)}
			</div>

			{/* "View All" button */}
			{data.length > 2 && (
				<div className="flex justify-center mt-4">
					<button
						className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
						onClick={() => setShowAll(!showAll)}
					>
						{showAll ? "Show Less" : "View All"}
					</button>
				</div>
			)}
		</div>
	);
}

export default History;
