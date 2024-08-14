
import Home from './@components/elements/Home'
import NavBar from './@components/elements/NavBar'
import { Button } from './@components/ui/button'


function App() {


  return (
    <>
    <div className=' bg-yellow-200 h-screen'>
    <div className="fixed w-[68px] h-full left-0 z-1 top-0 bg-green-500 rounded-xl  "><NavBar/></div>
    <div className=' h-screen w-full flex justify-center items-center'><Home/></div>
    </div>
    </>
  )
}

export default App
