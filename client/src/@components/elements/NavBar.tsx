import { Button } from "../ui/button"


function NavBar() {
  return (
    <div className="  p-1 h-full space-y-2 ">
        <div className="  bg-yellow-300"><img src="images\ZuAI.png " className=""></img></div>
        <div className=" bg-white z-1 h-full  p-1 space-y-2 rounded-xl">
        <Button className="mt-2" ><img src="images\dashboard.png"></img></Button> 
        <Button className="bg-white"><img src="images\book_4.png"></img></Button>
        <Button className="bg-white"><img src="images\file_copy.png"></img></Button>
        <Button className="bg-white"><img src="images\quiz.png"></img></Button>
        </div>
    </div>
  )
}

export default NavBar