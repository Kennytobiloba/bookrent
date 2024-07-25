import React from 'react';
import { Link } from 'react-router-dom';
import {FaStar} from "react-icons/fa"

const Books = ({ book }) => {
  if (!book) {
    return <div>No book data available</div>;
  }

  return (
    <div  className=' '>
      <Link to={`/items/${book.id}`}>

        <img src={book.cover} alt={book.title} className='w-full h-auto object-cover ' />
        <h4 className='text-sm mt-2  font-bold md:text-[18px] text-[16px]'>{book.title}</h4>
        <h4 className='text-sm mt-4 text-black  md:text-[16px] text-[14px]'>{book.autor}</h4>
        <div className='text-red-500 flex gap-2 justify-center mt-2 p-2'><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></div>
        <div className=' flex items-center justify-around mt-2'>
      <div className='text-[14px] text-black'>
      (<span className='text-red-200 text-[12px]'>120</span> Review)
      </div>
      <h3 className='text-red-500'>${book.price}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Books;
