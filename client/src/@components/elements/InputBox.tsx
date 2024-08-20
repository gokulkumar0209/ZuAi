import React, { useState, useEffect } from "react";
import DragDrop from "./DragDrop";
import { Button } from "../ui/button"; 

interface InputBoxProps {
	selectedFile: File | null;
	setSelectedFile: (file: File | null) => void;
	setShow: (show: boolean) => void;
}

const InputBox: React.FC<InputBoxProps> = ({
	selectedFile,
	setSelectedFile,
	setShow,
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
				const existingFiles: { name: string; content: string }[] = JSON.parse(
					localStorage.getItem("files") || "[]"
				);
				existingFiles.push({ name: selectedFile.name, content: fileData });
				localStorage.setItem("files", JSON.stringify(existingFiles));
				alert(`File "${selectedFile.name}" saved successfully.`);
			};
			reader.readAsDataURL(selectedFile);
			setShow(false);
		} else {
			setShow(true);
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
