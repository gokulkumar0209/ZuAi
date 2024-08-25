import React, { useState, useEffect } from "react";
import DragDrop from "./DragDrop";
import { Button } from "../ui/button";
import { criteria, review } from "@/store/dummy";
import { v4 as uuidv4 } from "uuid";
import { getDocument, GlobalWorkerOptions, version } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.js`;

interface InputBoxProps {
	selectedFile: File | null;
	setSelectedFile: (file: File | null) => void;
}

const InputBox: React.FC<InputBoxProps> = ({
	selectedFile,
	setSelectedFile,
}) => {
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
			} catch (error) {
				console.error("Error processing file:", error);
				alert("An error occurred while processing the file.");
			}
		} else {
			alert(!selectedFile ? "No file selected!" : "No title Given");
		}
	};

	return (
		<div className="bg-gray-200 p-6 rounded-lg m-6">
			<DragDrop selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="flex flex-col">
					<label htmlFor="course" className="mb-1 font-semibold">
						Select your course and subjects
					</label>
					<div className="flex space-x-4">
						<select
							name="course"
							value={course}
							onChange={(e) => setCourse(e.target.value)}
							className="w-1/2 p-2 border border-gray-300 rounded-lg"
						>
							<option value="">Course Work Type</option>
							<option value="IA">IA</option>
							<option value="EE">EE</option>
							<option value="IO">IO</option>
							<option value="Tok">Tok</option>
						</select>
						<select
							name="subject"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							className="w-1/2 p-2 border border-gray-300 rounded-lg"
						>
							<option value="">Subject</option>
							<option value="Fluid Dynamics">Fluid Dynamics</option>
							<option value="Heat Transfer">Heat Transfer</option>
							<option value="Mass Transfer">Mass Transfer</option>
							<option value="M1">M1</option>
						</select>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="title" className="mb-1 font-semibold">
						Enter your Essay Title *
					</label>
					<input
						type="text"
						id="title"
						required
						placeholder="how nation works"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="p-2 border border-gray-300 rounded-lg"
					/>
				</div>
				<div className="flex justify-center">
					<Button type="submit" className="mt-4">
						Evaluate your score
					</Button>
				</div>
			</form>
		</div>
	);
};

export default InputBox;
