import React, { useState } from "react";
import InputBox from "./InputBox";
import History from "./History";

interface HomeProps {
	// Add any necessary props here
}

const Home: React.FC<HomeProps> = (_props: HomeProps) => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	return (
		<div className="w-full">
			<div className="grid grid-cols-2">
				<div className="col-span-1">
					<InputBox
						selectedFile={selectedFile}
						setSelectedFile={setSelectedFile}
					/>
				</div>
				<div className="container">
					<img
						src="https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-Desktop.jpg"
						className="h-full w-full object-cover p-6"
						alt="Nature"
					/>
				</div>
				<div className="bg-yellow-200"></div>
			</div>

			<div>
				My Course Works
				<div>
					<History />
				</div>
			</div>
		</div>
	);
};

export default Home;
