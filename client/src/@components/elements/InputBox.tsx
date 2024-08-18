import React from "react";
import DragDrop from "./DragDrop";
import { Button } from "../ui/button";

interface InputBoxProps {
	selectedFile: File | null;
	setSelectedFile: (file: File | null) => void;
}
const InputBox: React.FC<InputBoxProps> = ({
	selectedFile,
	setSelectedFile,
}) => {
	const handleSubmit = () => {
		if (selectedFile) {
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
		} else {
			alert("No file selected!");
		}
	};
	return (
		<div className=" bg-green-400">
			<DragDrop selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
			
			<div className=" flex justify-center">
				<Button onClick={handleSubmit} className="mt-4">
					Evaluate your score
				</Button>
			</div>
		</div>
	);
};

export default InputBox;
