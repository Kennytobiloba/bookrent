import React, { useContext, useState } from 'react';
import { FaRegBell, FaRegMoon } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineWbSunny } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { BooksContext, ThemeContext } from '../../Context';
import Cart from '../../Pages/Cart/Cart';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [showCart, setShowCart] = useState(false);
  const { state, dispatch } = useContext(BooksContext);

  function handleCartShow() {
    if (state.cartData.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }

  return (
    <div>
      {showCart && <Cart onClose={handleCartShow} />}
      <nav className='container flex items-center justify-between space-x-10 py-6'>
        <a href="/" className="flex gap-2 items-center">
          <IoBookSharp className="w-8 h-8" />
          <span className="font-bold uppercase">Book Rental</span>
        </a>
        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <FaRegBell />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <MdOutlineWbSunny /> : <FaRegMoon />}
            </a>
          </li>
          <li className="relative">
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
             
            >
              <MdOutlineShoppingCart   />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[20px] h-[20px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
