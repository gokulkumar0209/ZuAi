import React from "react";
import { FileUp } from "lucide-react";

interface DragDropProps {
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
}

const DragDrop: React.FC<DragDropProps> = ({ selectedFile, setSelectedFile }) => {
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
    <div className="p-6 bg-gray-100 flex flex-col items-center border-2 border-dashed border-gray-400 rounded-lg max-w-md mx-auto">
      <div
        className="w-full h-20 flex flex-col items-center justify-center cursor-pointer text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {selectedFile ? (
          <span className="text-gray-700 truncate">{selectedFile.name}</span>
        ) : (
          <div className="text-gray-500">
            <FileUp className="mx-auto mb-2 w-10 h-10" />
            <p className="text-sm md:text-base">Drag and Drop file</p>
            <p className="text-xs">Limit 25 MB per file</p>
          </div>
        )}
      </div>
      <div className="mt-4">
        <label
          htmlFor="file-upload"
          className="cursor-pointer font-bold py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
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
};

export default DragDrop;
