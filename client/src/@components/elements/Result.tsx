import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Explanations from "./Explanations";
import Overall from "./Overall";
import { data1, data2 } from "@/store/dummy";

const Result: React.FC = () => {
	const [pdfUrl, setPdfUrl] = useState<string | null>(null);
	const [date, setDate] = useState("");
	const [rating, setRating] = useState(0);
	const [resultRating, setResultRating] = useState(0);

	useEffect(() => {
		try {
			const lastSelectedId = localStorage.getItem("lastSelected");
			if (lastSelectedId) {
				const history = JSON.parse(localStorage.getItem("history") || "[]");
				const selectedFileData = history.find(
					(item: any) => item.id === lastSelectedId
				);

				if (selectedFileData) {
					setPdfUrl(selectedFileData.content);
					setDate(new Date(selectedFileData.timestamp).toLocaleDateString());
					setRating(selectedFileData.rating);
					setResultRating(selectedFileData.resultRating);
				} else {
					alert("No file found with the given ID.");
				}
			} else {
				alert("No file ID found in localStorage.");
			}
		} catch (error) {
			console.error("Failed to retrieve file data:", error);
			alert("An error occurred while retrieving file data.");
		}
	}, []);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 h-screen gap-4 p-4">
			<div className="bg-gray-100 h-full p-2 md:p-4 flex items-center justify-center">
				{pdfUrl ? (
					<object
						data={pdfUrl}
						type="application/pdf"
						className="w-full h-full"
						aria-label="PDF Document"
					>
						<p>
							Your browser does not support PDFs.{" "}
							<a href={pdfUrl}>Download the PDF</a>.
						</p>
					</object>
				) : (
					<div>No file selected</div>
				)}
			</div>
			<div className="bg-white p-2 md:p-4 flex flex-col space-y-4">
				<Overall rating={rating} resultRating={resultRating} date={date} />
				<Explanations percentage={80} data1={data1} data2={data2} />
				<Explanations percentage={60} data1={data1} data2={data2} />
				<Explanations percentage={40} data1={data1} data2={data2} />
			</div>
		</div>
	);
};

export default Result;
