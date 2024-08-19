import React, { useEffect, useState } from "react";
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
	const [course, setCourse] = useState("");
	const [subject, setSubject] = useState("");
	const [title, setTitle] = useState("");
	useEffect(() => {
		setTitle("");
	}, [selectedFile]);
	const handleSubmit = () => {
		if (selectedFile && title != "") {
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

			if (!selectedFile) {
				alert("No file selected!");
			} else {
				alert("No title Given");
			}
		}
	};

	return (
		<div className="bg-green-400">
			<DragDrop selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
			<div>
				<form className="">
					<p>Select your course and subjects</p>
					<div className="flex justify-evenly">
						<select
							name="course"
							value={course}
							onChange={(e) => setCourse(e.target.value)}
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
						>
							<option value="">Subject</option>
							<option value="Fluid Dynamics">Fluid Dynamics</option>
							<option value="Heat Transfer">Heat Transfer</option>
							<option value="Mass Transfer">Mass Transfer</option>
							<option value="M1">M1</option>
						</select>
					</div>
					<div className="grid">
						<label htmlFor="title">Enter your Essay Title *</label>
						<input
							type=""
							id="title"
							required
							placeholder="how nation works"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="flex justify-center">
						<Button type="submit" onClick={handleSubmit} className="mt-4">
							Evaluate your score
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default InputBox;
