import Home from "./@components/elements/Home";
import NavBar from "./@components/elements/NavBar";
import { Button } from "./@components/ui/button";

function App() {
	return (
		<>
			<div className=" bg-yellow-200 h-screen grid grid-cols-12">
				<div className=" w-[68px] h-full left-0 z-1 top-0 bg-green-500 rounded-xl col-span-1 ">
					<NavBar />
				</div>
				<div className=" h-screen bg-red-500 col-span-10">
					<Home />
				</div>
        <div className=" col-span-1"></div>
			</div>
		</>
	);
}

export default App;
