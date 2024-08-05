import { useContext, useState } from "react";
import { asset, getAllBooks } from "../../assets/data";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { BookData } from "../Context";



const Heading = () => {
  const {state,dispatch} = useContext(BookData)
  const {cartData} = state
  
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      navigate(`/search?query=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  const suggestions = ["Rowling", "George ", "Tolkien", "Stephen "];
  
  const handleFocus = () => setShowSuggestions(true);
  const handleBlur = () => setTimeout(() => setShowSuggestions(false), 100);

  return (
    <div className='lg:bg-white w-full lg:h-[110px] md:h-[140px] h-[200px] flex items-center justify-center'>
      <div className='2xl:w-[80%] md:w-[96%] sm:w-[96%] w-[98%] mx-auto flex p-8'>
        <div className="flex justify-between w-full items-center flex-wrap md:flex-nowrap lg:gap-10 gap-4 md:gap-4">
          <div className="2xl:w-[90px] w-[80px] md:block hidden">
            <img src={asset.Logo} alt="" className="w-full h-full object-contain" />
          </div>

          <div className="relative flex md:w-[40%] w-full h-14 border rounded-[30px] border-gray-200 items-center p-6">
            <input 
              type="text" 
              placeholder="Search book by author or publisher" 
              className="w-full p-2 outline-none placeholder-gray-500 text-[14px] md:text-[18px]"
              value={inputValue}
              onChange={handleInput}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <CiSearch size={32} className="text-red-500 cursor-pointer" onClick={handleSearch} />
            {showSuggestions && (
              <ul className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                {suggestions.filter(s => s.toLowerCase().includes(inputValue.toLowerCase())).map((suggestion, index) => (
                  <li 
                    key={index} 
                    className="p-2 hover:bg-gray-100 cursor-pointer" 
                    onMouseDown={() => setInputValue(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex justify-between items-center mx-auto md:mx-0 text-[14px] md:gap-4 lg:gap-4 2xl:text-[18px] md:text-[16px] gap-4 sm:gap-12 sm:text-[16px] sm:flex-nowrap flex-wrap">
            <h3 className='hover:text-red-400 cursor-pointer'>FAQ</h3>
            <h3 className='hover:text-red-400 cursor-pointer'>Track Order</h3>
            <div className="relative">
              <Link to="/cart"><IoCartOutline className="2xl:text-[38px] text-[30px]" /></Link>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
                {cartData.length}
              </span>
            </div>
            <button className="bg-red-500 text-white font-bold flex md:px-6 md:py-4 lg:py-4 lg:px-10 lg:text-[18px] rounded-full sm:text-[14px] text-[12px] px-8 py-4">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
