import Home from "./@components/elements/Home";
import NavBar from "./@components/elements/NavBar";

function App() {
	return (
		<>
			<div className=" h-screen grid grid-cols-12 bg-gray-300">
				<div className="  h-full left-0 z-1 top-0 bg-gray-300 rounded-xl col-span-1 m-2 ">
					<NavBar />
				</div>
				<div className=" h-screen bg-red-500 col-span-10 flex  justify-center">
					<Home />
				</div>
        <div className=" col-span-1"></div>
			</div>
		</>
	);
}

export default App;
