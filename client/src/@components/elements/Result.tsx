import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { data1, data2 } from "../../store/dummy";
import Explanations from "./Explanations";
import Overall from "./Overall";

interface ResultProps {
	percentage: number;
	selectedFile: File | null;
}

const Result: React.FC<ResultProps> = ({ percentage, selectedFile }) => {
	const [pdfUrl, setPdfUrl] = useState<string | null>(null);
	const [remark, setRemark] = useState("");
	const [date, setDate] = useState("");

	useEffect(() => {
		if (selectedFile && selectedFile.type === "application/pdf") {
			const reader = new FileReader();
			reader.onload = () => {
				setPdfUrl(reader.result as string);
				setDate(new Date(selectedFile.lastModified).toLocaleDateString());
			};
			reader.readAsDataURL(selectedFile);
			setRemark("Good");
		} else {
			setPdfUrl(null);
		}
	}, [selectedFile]);

	return (
		<div className="grid grid-cols-2 h-screen">
			<div className=" bg-gray-100 h-full">
				{selectedFile ? (
					<object
						data={pdfUrl || ""}
						type="application/pdf"
						className="w-full h-[500px]"
					>
						<a href={pdfUrl || ""}>Download PDF</a>
					</object>
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
