import React, { useState, useEffect } from "react";
import DragDrop from "./DragDrop";
import { Button } from "../ui/button";
import { criteria, review } from "@/store/dummy";
import { v4 as uuidv4 } from "uuid";

interface InputBoxProps {
	selectedFile: File | null;
	setSelectedFile: (file: File | null) => void;
}

const InputBox: React.FC<InputBoxProps> = ({
	selectedFile,
	setSelectedFile,
}) => {
	const [course, setCourse] = useState<string>("");
	const [subject, setSubject] = useState<string>("");
	const [title, setTitle] = useState<string>("");

	useEffect(() => {
		setTitle("");
	}, [selectedFile]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (selectedFile && title) {
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
