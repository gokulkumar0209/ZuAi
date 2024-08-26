import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./@components/elements/Home";
import Result from "./@components/elements/Result";
import NavBar from "./@components/elements/NavBar";
import { CalendarCheckIcon, FileStack, Menu } from "lucide-react";
import { useState } from "react";

function App() {
	const [navVis, setNavVis] = useState(false);

	return (
		<Router>
			<div className="grid grid-cols-12 h-screen bg-white">
				<Menu
					className=" fixed z-50  sm:hidden flex items-center p-2 bg-gray-400 m-4 rounded-md"
					onClick={() => setNavVis(!navVis)}
				/>
				<div
					className={`col-span-0 z-0  sm:col-span-1 ${
						navVis ? "block absolute col-span-1" : "hidden"
					} sm:block bg-white p-4`}
				>
					<NavBar />
				</div>
				<div
					className={`col-span-11 sm:col-span-10 p-4 md:p-6 lg:p-8 bg-white `}
				>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/result" element={<Result />} />
					</Routes>
				</div>

				<div className="col-span-1 bg-gray-100 p-2">
					<div className=" bg-white p-2 rounded-3xl mb-2 flex justify-center">
						🪙120
					</div>
					<div className=" bg-white p-2 rounded-3xl mb-2 flex justify-center">
						🔥24
					</div>
					<div className=" bg-white p-2  rounded-full m-2 flex justify-center">
						<CalendarCheckIcon />
					</div>
					<div className=" bg-white p-2 rounded-full m-2 flex justify-center">
						<FileStack />
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
