import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./@components/elements/Home";
import Result from "./@components/elements/Result";
import NavBar from "./@components/elements/NavBar";

function App() {
	return (
		<Router>
			<div className="h-full grid grid-cols-12 bg-gray-300">
				<div className="h-full left-0 z-1 top-0 bg-gray-300 rounded-xl col-span-1 m-2">
					<NavBar />
				</div>
				<div className="h-screen col-span-10 flex justify-center">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/result" element={<Result />} />
					</Routes>
				</div>
				<div className="col-span-1 bg-white"></div>
			</div>
		</Router>
	);
}

export default App;
