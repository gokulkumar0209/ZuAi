import { ReactNode, useEffect, useState } from "react";
import CourseworkCard from "./CourseworkCard"; // Adjust the import path as necessary
import { Button } from "../ui/button"; // Ensure this is the correct path

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

function Examples() {
	const [filteredData, setFilteredData] = useState<FileData[]>([]);
	const [selectedCourse, setSelectedCourse] = useState("IA");

	useEffect(() => {
		const dummy = localStorage.getItem("history");

		if (dummy) {
			const allData: FileData[] = JSON.parse(dummy);

			if (selectedCourse) {
				const filtered = allData.filter(
					(file) => file.course === selectedCourse
				);
				setFilteredData(filtered);
			} else {
				setFilteredData(allData);
			}
		}
	}, [selectedCourse]);

	return (
		<div className="p-4 sm:p-6 lg:p-8">
			<div className="flex flex-wrap gap-2 mb-4">
				{["IA", "EE", "IO", "Tok", "Others"].map((course) => (
					<Button
						key={course}
						value={course}
						onClick={() => setSelectedCourse(course)}
						className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ${
							selectedCourse === course ? "bg-blue-700" : ""
						}`}
					>
						{course}
					</Button>
				))}
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{filteredData.length > 0 ? (
					filteredData.map((file) => (
						<CourseworkCard key={file.id} file={file} />
					))
				) : (
					<div className="col-span-full text-center text-gray-500">No files found</div>
				)}
			</div>
		</div>
	);
}

export default Examples;
