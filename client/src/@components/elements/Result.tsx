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
	const percentage1 = 80;
	const percentage2 = 60;
	const percentage3 = 40;
	useEffect(() => {
		if (selectedFile && selectedFile.type === "application/pdf") {
			const reader = new FileReader();

			reader.onload = () => {
				// Create an object URL for the PDF file
				setPdfUrl(reader.result as string);
				setDate(new Date(selectedFile.lastModified).toLocaleDateString());
			};

			reader.readAsDataURL(selectedFile); // Read the file as data URL
			setRemark("Good");
		} else {
			setPdfUrl(null); // Clear URL if not a PDF file
		}
	}, [selectedFile]);

	return (
		<div className=" grid grid-cols-2">
			<div className="  flex justify-center items-center">
				{selectedFile ? (
					selectedFile.type === "application/pdf" ? (
						<object
							data={pdfUrl || ""}
							type="application/pdf"
							className=" w-[400px] h-[550px]"
						>
							<a href={pdfUrl || ""}>Download PDF</a>
						</object>
					) : (
						<div>Selected file is not a PDF.</div>
					)
				) : (
					<div>No file selected</div>
				)}
			</div>
			<div className="">
				<Overall percentage={percentage} remark={remark} date={date} />
				<Explanations percentage={percentage1} data1={data1} data2={data2} />
				<Explanations percentage={percentage2} data1={data1} data2={data2} />
				<Explanations percentage={percentage3} data1={data1} data2={data2} />
			</div>
		</div>
	);
};

export default Result;
