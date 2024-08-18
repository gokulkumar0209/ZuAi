import { useState } from "react";
import { Button } from "../ui/button"; // Assuming Button component has types defined

interface InputBoxProps {
	selectedFile: File | null;
	setSelectedFile: (file: File | null) => void;
}

function InputBox({ selectedFile, setSelectedFile }: InputBoxProps) {
	const [isDragging, setIsDragging] = useState<boolean>(false);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files ? e.target.files[0] : null;
		setSelectedFile(file);
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(false);
		const file = e.dataTransfer.files ? e.dataTransfer.files[0] : null;
		setSelectedFile(file);
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleDragLeave = () => {
		setIsDragging(false);
	};

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
		<div className="flex flex-col items-center">
			<div
				className={` bg-gray-300 border-2 border-dashed border-gray-500 w-[400px] h-[300px] flex items-center justify-center ${
					isDragging ? "bg-gray-500" : ""
				}`}
				onDrop={handleDrop}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
			>
				<div><input
					type="file"
					onChange={handleFileChange}
					className="  absolute left-1/3 top-1/3  cursor-pointer opacity-100 w-full h-full"
				/></div>
				{!selectedFile && !isDragging && (
					<span>Drag & Drop or Click to Select a File</span>
				)}
				{isDragging && (
					<div className="absolute bg-gray-500 opacity-50 w-full h-full flex items-center justify-center">
						<span>Drop file here</span>
					</div>
				)}
				{selectedFile && !isDragging && <span>{selectedFile.name}</span>}
			</div>
			<Button onClick={handleSubmit} className="mt-4">
				Submit
			</Button>
		</div>
	);
}

export default InputBox;
