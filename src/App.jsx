import { Outlet } from "react-router-dom";
import Heading from "./Components/Heading/Heading";
import Navbar from "./Components/Navbar/Navbar";
import { BookState } from "./Components/Context";
import { useState } from "react";
// index.js or App.js




function App() {
  const [category, setCategory] = useState("All")
  
  return (
    <BookState.Provider value={{category,setCategory}}>
    <div className="h-screen max-h-screen flex flex-col relative">
      <div className="overflow-hidden flex-1 flex flex-col">
      <div className="p-0 m-0 h-auto ">
      <Heading/>
      <Navbar/>
      </div>
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
    </BookState.Provider>
  );
}

export default App;
