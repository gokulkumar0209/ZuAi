import React, { useState } from "react";
import InputBox from "./InputBox";

function Home() {
	const [fileName, setFileName] = useState<string | null>(null);
	const [filePreview, setFilePreview] = useState<string | null>(null);
	return (
		<div className="flex items-center justify-center h-screen w-screen">
			<div>
				<div>
					Hew IB folks! Unsure about the quality of your answers? We get you.
				</div>
				<div className="h-[476px] w-[600px] bg-blue-400 p-2">
					<InputBox
						fileName={fileName}
						setFileName={setFileName}
						filePreview={filePreview}
						setFilePreview={setFilePreview}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
