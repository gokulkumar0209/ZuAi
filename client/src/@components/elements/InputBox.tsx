import React, { useState, DragEvent, ChangeEvent, useEffect } from "react";

const FILE_SIZE_LIMIT_MB = 25;
const FILE_SIZE_LIMIT_BYTES = FILE_SIZE_LIMIT_MB * 1024 * 1024; // Convert MB to Bytes

const InputBox = () => {
	const [highlight, setHighlight] = useState<boolean>(false);
	const [fileName, setFileName] = useState<string | null>(null);
	const [filePreview, setFilePreview] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	// Load file from local storage on component mount
	useEffect(() => {
		const storedFile = localStorage.getItem("uploadedFile");
		if (storedFile) {
			const fileData = JSON.parse(storedFile);
			setFileName(fileData.name);
			setFilePreview(fileData.data);
		}
	}, []);

	const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setHighlight(true);
	};

	const handleDragLeave = () => {
		setHighlight(false);
	};

	const handleDrop = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setHighlight(false);
		if (event.dataTransfer.files.length > 0) {
			(event.dataTransfer.files[0]);
		}
	};

	const handleClick = () => {handleFile
		document.getElementById("file-input")?.click();
	};

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			handleFile(event.target.files[0]);
		}
	};

	const handleFile = (file: File) => {
		if (file.size > FILE_SIZE_LIMIT_BYTES) {
			setError(`File size exceeds ${FILE_SIZE_LIMIT_MB} MB limit.`);
			return;
		}

		setError(null);
		const reader = new FileReader();
		reader.onloadend = () => {
			const base64File = reader.result as string;
			const fileData = {
				name: file.name,
				data: base64File,
			};
			localStorage.setItem("uploadedFile", JSON.stringify(fileData));
			setFileName(file.name);
			setFilePreview(base64File);
		};
		reader.readAsDataURL(file);
	};

	return (
		<div
			className={`w-full h-[200px] flex flex-col items-center justify-center border-2 ${
				highlight ? "border-black" : "border-dashed border-gray-300"
			} rounded-lg cursor-pointer bg-gray-300`}
			onClick={handleClick}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
		>
			<input
				id="file-input"
				type="file"
				accept=".pdf"
				className=""
				onChange={handleFileChange}
			/>
			<h2 className="text-gray-600 mb-2">
				Drag and drop a PDF here or click to select
			</h2>
			{error && <p className="text-red-600">{error}</p>}
			{fileName ? (
				<div>
					<p className="text-gray-700">Selected file: {fileName}</p>
					{filePreview && (
						<iframe
							src={filePreview}
							title="File Preview"
							className="w-full h-[50px] mt-2"
						/>
					)}
				</div>
			) : (
				<p className="text-gray-500">No file selected</p>
			)}
			<p className="text-gray-400 mt-2">
				Limit: {FILE_SIZE_LIMIT_MB} MB per file
			</p>
		</div>
	);
};

export default InputBox;
