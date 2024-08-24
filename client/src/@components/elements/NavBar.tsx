import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

function NavBar() {
	const navigate = useNavigate();
	return (
		<div className="  p-1 h-full space-y-2 ">
			<div className="  bg-yellow-300">
				<Button className="mt-2" onClick={() => navigate("/")}>
					<img src="images\ZuAI.png " className=""></img>
				</Button>
			</div>
			<div className=" bg-white z-1 h-full  p-1 space-y-2 rounded-xl">
				<Button className="mt-2" onClick={() => navigate("/result")}>
					<img src="images\dashboard.png"></img>
				</Button>
				<Button className="bg-white">
					<img src="images\book_4.png"></img>
				</Button>
				<Button className="bg-white">
					<img src="images\file_copy.png"></img>
				</Button>
				<Button className="bg-white">
					<img src="images\quiz.png"></img>
				</Button>
			</div>
		</div>
	);
}

export default NavBar;
