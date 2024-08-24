import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PdfviewrProps {
	pdfFile: string;
}
const PdfViewer: React.FC<PdfviewrProps> = ({ pdfFile }) => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	return (
		<div className="pdf-viewer-container">
			<div className="pdf-viewer-header">
				<span className="text-gray-600 font-semibold">
					IB Economic Paper IA2 .pdf
				</span>
				<div className="flex space-x-4">
					<span className="text-gray-500">60%</span>
					<button className="bg-gray-200 p-1 rounded-full">
						<i className="fas fa-search"></i>
					</button>
					<button className="bg-gray-200 p-1 rounded-full">
						<i className="fas fa-ellipsis-v"></i>
					</button>
				</div>
			</div>
			<div
				style={{ height: "500px" }}
				className="border border-gray-300 rounded-lg overflow-hidden"
			>
				<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
					<Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
				</Worker>
			</div>
		</div>
	);
};

export default PdfViewer;
