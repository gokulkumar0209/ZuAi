import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import {
	BookIcon,
	FileQuestion,
	LayoutDashboardIcon,
	LucideSave,
} from "lucide-react";

function NavBar() {
	const navigate = useNavigate();
	return (
		<div className="fixed top-0 left-0 h-full w-20 bg-white shadow-lg flex flex-col items-center p-2 space-y-2 z-50 m-4 rounded-lg">
			<img
				src="images/ZuAI.png"
				alt="Logo"
				className="w-12 h-auto bg-white mt-2"
				onClick={() => navigate("/")}
			/>

			<div className="flex flex-col items-center flex-grow justify-between">
				<div className="bg-white p-1 rounded-xl space-y-2 w-full">
					<Button className="w-full">
						<LayoutDashboardIcon />
					</Button>
					<Button className="w-full">
						<BookIcon />
					</Button>
					<Button className="w-full">
						<LucideSave />
					</Button>
					<Button className="w-full">
						<FileQuestion />
					</Button>
				</div>
				<div className="text-center">hello</div>
			</div>
		</div>
	);
}

export default NavBar;
