import React, { useState } from "react";
import InputBox from "./InputBox";
import History from "./History";
import Examples from "./Examples";
import { design } from "@/store/design";

interface HomeProps {
	// Add any necessary props here
}

const Home: React.FC<HomeProps> = (_props: HomeProps) => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	return (
		<div className="w-full p-4">
			{/* InputBox and Image: Full width on all screens */}
			<div className="w-full flex flex-col lg:flex-row gap-4">
				<div className="flex-1">
					<InputBox
						selectedFile={selectedFile}
						setSelectedFile={setSelectedFile}
					/>
				</div>
				<div className="hidden lg:flex flex-1">
					<img
						src={design}
						className="w-full h-96 object-contain rounded-lg"
						alt="Image"
					/>
				</div>
			</div>

			{/* My Course Works Section: Full width on all screens */}
			<div className="p-4 rounded-lg mt-4">
				<h2 className="text-lg font-semibold mb-4">My Course Works</h2>
				<History />
			</div>

			{/* Explore Coursework Section: Full width on all screens */}
			<div className=" p-4 rounded-lg mt-4">
				<h2 className="text-lg font-semibold mb-4">Explore Coursework</h2>
				<Examples />
			</div>
		</div>
	);
};

export default Home;
