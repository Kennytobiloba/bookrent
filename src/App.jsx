import { Outlet } from "react-router-dom";
import Heading from "./Components/Heading/Heading";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="h-screen max-h-screen flex flex-col">
      <div className="overflow-hidden flex-1 flex flex-col">
        <Heading />
        <Navbar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
