import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./@components/elements/Home";
import Result from "./@components/elements/Result";
import NavBar from "./@components/elements/NavBar";
import { Calendar, CalendarCheck2Icon, CalendarCheckIcon, CalendarClock, CalendarDays, CalendarFold, CalendarPlusIcon, FileStack } from "lucide-react";
import EventEmitter from "events";

function App() {
	return (
		<Router>
			<div className="grid grid-cols-12 h-screen bg-white">
				{/* Left sidebar */}
				<div className="col-span-1 hidden md:block bg-white p-4">
					<NavBar />
				</div>

				{/* Main content area */}
				<div className="col-span-10 p-4 md:p-6 lg:p-8 bg-white">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/result" element={<Result />} />
					</Routes>
				</div>

				{/* Right spacing column (optional) */}
				<div className="col-span-1 hidden md:block bg-gray-100 p-2">
					<div className=" bg-white p-2 rounded-3xl mb-2">🪙120</div>
					<div className=" bg-white p-2 rounded-3xl mb-2">🔥24</div>
					<div className=" bg-white p-2 rounded-3xl mb-2"><CalendarCheckIcon/></div>
					<div className=" bg-white p-2 rounded-3xl mb-2"><FileStack/></div>
				
				</div>
			</div>
		</Router>
	);
}

export default App;
