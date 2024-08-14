import React from "react";
import InputBox from "./InputBox";

function Home() {
	return (
		<div className=" flex items-center justify-center h-screen w-screen">
			<div className="  ">
				<div>
					Hew IB folks ! Unsure about the quality of your answers? We get you.
				</div>
				<div className=" h-[476px] w-[600px] bg-blue-400 p-2">
					<InputBox />
				</div>
			</div>
		</div>
	);
}

export default Home;
