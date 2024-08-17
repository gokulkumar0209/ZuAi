import { useState } from "react";
import InputBox from "./InputBox";
import Result from "./Result";

interface HomeProps {
	// Add any necessary props here
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	return (
		<div>
			<div className="">
				<InputBox
					selectedFile={selectedFile}
					setSelectedFile={setSelectedFile}
				/>
			</div>
			<div>
				<Result
					percentage={100} // Ensure this is a number type as expected by Result
					selectedFile={selectedFile}
				/>
			</div>
		</div>
	);
};

export default Home;
