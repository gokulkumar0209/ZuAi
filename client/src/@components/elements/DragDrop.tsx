import { useState } from "react";
import { Button } from "../ui/button";

interface DragDropProps {
	selectedFile: File | null;
	setSelectedFile: (file: File | null) => void;
}

function DragDrop({ selectedFile, setSelectedFile }: DragDropProps) {
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files ? e.target.files[0] : null;
		setSelectedFile(file);
	};
	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		const file = e.dataTransfer.files ? e.dataTransfer.files[0] : null;
		setSelectedFile(file);
	};
	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	return (
		<div className="p-4">
			<div
				className="bg-gray-300 border-2 border-dashed border-gray-500 w-[400px] h-[300px] relative block"
				style={{ pointerEvents: "all" }}
				onDrop={handleDrop}
				onDragOver={handleDragOver}
			></div>
			<div className=" flex items-center justify-center h-full">
				{selectedFile && <span>{selectedFile.name}</span>}
			</div>
			<div className=" absolute">
				<label
					htmlFor="file-upload"
					className=" cursor-pointer font-bold py-2 px-4 rounded"
				>
					Upload file
				</label>
				<input
					id="file-upload"
					type="file"
					onChange={handleFileChange}
					className="hidden"
				/>
			</div>
		</div>
	);
}

export default DragDrop;
