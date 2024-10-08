import React, { useState, useEffect } from "react";
import DragDrop from "./DragDrop";
import { Button } from "../ui/button";
import { criteria, review } from "@/store/dummy";
import { v4 as uuidv4 } from "uuid";
import { getDocument, GlobalWorkerOptions, version } from "pdfjs-dist";
import { useNavigate } from "react-router-dom";

GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.js`;

interface InputBoxProps {
	selectedFile: File | null;
	setSelectedFile: (file: File | null) => void;
}

const InputBox: React.FC<InputBoxProps> = ({
	selectedFile,
	setSelectedFile,
}) => {
	const navigate = useNavigate();
	const [course, setCourse] = useState<string>("Others");
	const [subject, setSubject] = useState<string>("Others");
	const [title, setTitle] = useState<string>("");

	useEffect(() => {
		setTitle("");
	}, [selectedFile]);

	const convertPdfToImage = async (file: File): Promise<string> => {
		const arrayBuffer = await file.arrayBuffer();
		const pdf = await getDocument({ data: arrayBuffer }).promise;
		const page = await pdf.getPage(1);

		const viewport = page.getViewport({ scale: 1 });
		const canvas = document.createElement("canvas");
		const context = canvas.getContext("2d");

		if (!context) {
			throw new Error("Failed to get canvas context");
		}

		canvas.height = viewport.height;
		canvas.width = viewport.width;

		await page.render({
			canvasContext: context,
			viewport: viewport,
		}).promise;

		return canvas.toDataURL("image/png");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (selectedFile && title) {
			try {
				const imageUrl = await convertPdfToImage(selectedFile);
				const reader = new FileReader();
				reader.onload = () => {
					const fileData = reader.result as string;
					const fileId = uuidv4();
					const newEntry = {
						id: fileId,
						name: selectedFile.name,
						content: fileData,
						title: title,
						subject: subject,
						course: course,
						rating: 16,
						resultRating: 8,
						language: "English",
						words: 4000,
						timeToRead: 20,
						criteria: criteria,
						review: review,
						timestamp: new Date().toISOString(),
						image: imageUrl,
					};

					const existingHistory: any[] = JSON.parse(
						localStorage.getItem("history") || "[]"
					);

					existingHistory.push(newEntry);

					localStorage.setItem("history", JSON.stringify(existingHistory));

					localStorage.setItem("lastSelected", fileId);

					alert(`File "${selectedFile.name}" saved successfully.`);
				};
				reader.readAsDataURL(selectedFile);
				navigate("/result");
			} catch (error) {
				console.error("Error processing file:", error);
				alert("An error occurred while processing the file.");
			}
		} else {
			alert(!selectedFile ? "No file selected!" : "No title Given");
		}
	};

	return (
		<div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
			<DragDrop selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="flex flex-col md:flex-row md:space-x-4">
					<div className="flex-1">
						<label htmlFor="course" className="block mb-2 text-gray-700 font-semibold">
							Select your course
						</label>
						<select
							name="course"
							value={course}
							onChange={(e) => setCourse(e.target.value)}
							className="w-full p-3 border border-gray-300 rounded-lg"
						>
							<option value="">Course Work Type</option>
							<option value="IA">IA</option>
							<option value="EE">EE</option>
							<option value="IO">IO</option>
							<option value="Tok">Tok</option>
						</select>
					</div>
					<div className="flex-1 mt-4 md:mt-0">
						<label htmlFor="subject" className="block mb-2 text-gray-700 font-semibold">
							Select your subject
						</label>
						<select
							name="subject"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							className="w-full p-3 border border-gray-300 rounded-lg"
						>
							<option value="">Subject</option>
							<option value="Fluid Dynamics">Fluid Dynamics</option>
							<option value="Heat Transfer">Heat Transfer</option>
							<option value="Mass Transfer">Mass Transfer</option>
							<option value="M1">M1</option>
						</select>
					</div>
				</div>
				<div>
					<label htmlFor="title" className="block mb-2 text-gray-700 font-semibold">
						Enter your Essay Title *
					</label>
					<input
						type="text"
						id="title"
						required
						placeholder="how nation works"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full p-3 border border-gray-300 rounded-lg"
					/>
				</div>
				<div className="flex justify-center">
					<Button
						type="submit"
						className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
					>
						Evaluate your score
					</Button>
				</div>
			</form>
		</div>
	);
};

export default InputBox;
