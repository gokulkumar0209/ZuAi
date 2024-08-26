import React, { useState } from "react";
import InputBox from "./InputBox";
import History from "./History";
import Examples from "./Examples";

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
						src="https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-Desktop.jpg"
						className="w-full h-auto object-cover rounded-lg"
						alt="Nature"
					/>
				</div>
			</div>

			{/* My Course Works Section: Full width on all screens */}
			<div className="bg-yellow-200 p-4 rounded-lg mt-4">
				<h2 className="text-lg font-semibold mb-4">My Course Works</h2>
				<History />
			</div>

			{/* Explore Coursework Section: Full width on all screens */}
			<div className="bg-blue-200 p-4 rounded-lg mt-4">
				<h2 className="text-lg font-semibold mb-4">Explore Coursework</h2>
				<Examples />
			</div>
		</div>
	);
};

export default Home;
