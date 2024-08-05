import { Outlet } from "react-router-dom";
import Heading from "./Components/Heading/Heading";
import Navbar from "./Components/Navbar/Navbar";
import { BookData, BookState } from "./Components/Context";
import { useReducer, useState } from "react";
import { initialState, Reducer } from "./Reducer/Reducer";
import { ToastContainer } from 'react-toastify';


// index.js or App.js




function App() {
  const [category, setCategory] = useState("All")
  const [state,dispatch] = useReducer(Reducer,initialState)
  
  return (
    <BookData.Provider value={{state,dispatch}}>
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
    <ToastContainer/>
    </BookState.Provider>
    </BookData.Provider>
  );
}

export default App;
