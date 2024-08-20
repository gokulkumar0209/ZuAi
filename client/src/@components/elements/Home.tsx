import { useState } from "react";
import InputBox from "./InputBox";
import Result from "./Result";
import { Button } from "../ui/button";

interface HomeProps {
	// Add any necessary props here
}

const Home: React.FC<HomeProps> = (_props: HomeProps) => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [show, setShow] = useState(false);

	return (
		<div className=" w-full">
			<div className="absolute">
				<Button onClick={() => setShow(!show)} />
			</div>

			{show ? (
				<div className="grid grid-cols-2">
					<div className=" col-span-1">
						<InputBox
							selectedFile={selectedFile}
							setSelectedFile={setSelectedFile}
							setShow={setShow}
						/>
					</div>
          <div className=" bg-yellow-200"></div>
				</div>
			) : (
				<Result
					percentage={100} // Ensure this is a number type as expected by Result
					selectedFile={selectedFile}
				/>
			)}
		</div>
	);
};

export default Home;
