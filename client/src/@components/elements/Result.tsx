import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Explanations from "./Explanations";
import Overall from "./Overall";
import { data1, data2 } from "@/store/dummy";

const Result: React.FC = () => {
	const [pdfUrl, setPdfUrl] = useState<string | null>(null);
	const [remark, setRemark] = useState("");
	const [date, setDate] = useState("");
	const [percentage, setPercentage] = useState(0);

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
					setDate(new Date(selectedFileData.lastModified).toLocaleDateString());
					setRemark(selectedFileData.remark || "Good");
					setPercentage(selectedFileData.resultRating || 0);
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
		<div className="grid grid-cols-2 h-screen">
			<div className="bg-gray-100 h-full p-4">
				{pdfUrl ? (
					// <iframe src={pdfUrl} className=" h-full w-full border-none"></iframe>
					<object data={pdfUrl} className=" h-full w-full"></object>
				) : (
					<div>No file selected</div>
				)}
			</div>
			<div className="bg-white p-4">
				<Overall percentage={percentage} remark={remark} date={date} />
				<Explanations percentage={80} data1={data1} data2={data2} />
				<Explanations percentage={60} data1={data1} data2={data2} />
				<Explanations percentage={40} data1={data1} data2={data2} />
			</div>
		</div>
	);
};

export default Result;
