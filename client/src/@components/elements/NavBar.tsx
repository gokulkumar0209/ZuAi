import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import {
	BookIcon,
	FileQuestion,
	LayoutDashboardIcon,
	Files,
} from "lucide-react";

function NavBar() {
	const navigate = useNavigate();

	return (
		<div
			className={`fixed top-0 left-0 bottom-0 h-screen bg-gray-100 shadow-lg flex flex-col items-center p-2 space-y-4 z-50 rounded-lg m-4 transition-all duration-300 
               `}
		>
			<div className="flex flex-col items-center justify-between  w-full">
				<img
					src="images/ZuAI.png"
					alt="Company Logo"
					className="w-12 h-auto mt-4 rounded-lg cursor-pointer hover:bg-slate-600"
					onClick={() => navigate("/")}
				/>
				<div className=" flex-grow w-full p-2 space-y-4">
					<Button className="w-full flex justify-center items-center bg-white hover:bg-purple-600 p-2 rounded-full group">
						<LayoutDashboardIcon className="text-black w-6 h-6 group-hover:text-white" />
					</Button>
					<Button className="w-full flex justify-center items-center bg-white hover:bg-purple-600 p-2 rounded-full group">
						<BookIcon className="text-black w-6 h-6 group-hover:text-white" />
					</Button>
					<Button className="w-full flex justify-center items-center bg-white hover:bg-purple-600 p-2 rounded-full group">
						<Files className="text-black w-6 h-6 group-hover:text-white" />
					</Button>
					<Button className="w-full flex justify-center items-center bg-white hover:bg-purple-600 p-2 rounded-full group">
						<FileQuestion className="text-black w-6 h-6 group-hover:text-white" />
					</Button>
				</div>
				<img
					src="images/TEEN.png"
					alt="Secondary Logo"
					className="w-12 h-auto mt-4 rounded-full cursor-pointer hover:bg-slate-600"
				/>
			</div>
		</div>
	);
}

export default NavBar;
