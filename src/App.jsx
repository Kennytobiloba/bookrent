import { Outlet } from "react-router-dom"
import Heading from "./Components/Heading/Heading"
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
   <div className="">
    
   <div className="overflow-hidden">
   <Heading/>
   <Navbar/>
   <div>
    <Outlet/>
   </div>
   <div></div>
   </div>
    


   </div>
  )
}

export default App
