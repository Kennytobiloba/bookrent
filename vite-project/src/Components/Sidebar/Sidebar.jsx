import React from 'react'
import { FaCalendarAlt, FaFire, FaFolderPlus, FaRegClock, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div>
      <ul className='space-y-2'>
        <Link to="/trending-books">
      <li>
                    <div
                        className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg active `}
                        
                        to=""
                    >
                        <FaFire />
                        <span>Trending</span>
                    </div>
                </li>
                </Link>
         
         <Link to="/new-releases">

                <li>
                    <div
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg active"
                    
                        to="/new-releases"
                    >
                        <FaFolderPlus />
                        <span>New Releases</span>
                    </div>
                </li>
                </Link>

                <Link to="/upcoming-books">
                <li>
                    <div
                        className="flex items-center  active space-x-2 px-5 py-3.5 rounded-lg"
                        
                        to="/upcoming-books"
                    >
                        <FaCalendarAlt />
                        <span>Coming Soon</span>
                    </div>
                </li>
                </Link>
                <Link to="/favorite-books">
                <li>
                    <div
                        className="flex items-center active space-x-2 px-5 py-3.5 rounded-lg"
                         to="/favorite-books"
                         
                    >
                       <FaRegHeart />
                        <span>Favourites</span>
                    </div>
                </li>
                </Link>
                <Link to="">
                <li>
                    <div
                        className="flex active items-center space-x-2 px-5 py-3.5 rounded-lg"
                      
                    >
                       <FaRegClock />
                        <span>Watch Later</span>
                    </div>
                </li>
                </Link>

      </ul>

    </div>
  )
}

export default Sidebar