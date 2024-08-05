import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getAllBooks } from '../assets/data';
import { FaStar } from "react-icons/fa";
import Navtab from "../Pages/Navtab/Navtab";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookData } from '../Components/Context';

const BookDetails = () => {
  const { state, dispatch } = useContext(BookData);

  function Addtocart(event, bookFound) {
    event.stopPropagation();
    const found = state.cartData.find((item) => item.id === bookFound.id);
    if (!found) {
      dispatch({
        type: "Add to cart",
        payload: { ...bookFound }
      });
      toast.success(`Added ${bookFound?.title}`, {
        position: 'top-right'
      });
    } else {
      toast.error(`The book ${bookFound?.title} has already been added`, {
        position: 'top-right'
      });
    }

    console.log("Cart Data after addition:", state.cartData);
  }

  const { itemId } = useParams(); // Get the book ID from the URL
  const books = getAllBooks(); // Retrieve all books
  const bookFound = books.find((book) => book.id === Number(itemId)); // Find the book by ID

  if (!bookFound) return <div>Book not found</div>; // Handle case where book is not found

  return (
    <div className='2xl:w-[80%] mt-2 md:w-[96%] sm:w-[96%] w-[98%] mx-auto md:h-[70vh] h-[100vh] bg-red-600'>
      <div className='w-full lg:p-10 md:p-4 p-10 flex flex-col md:flex-row gap-10 md:items-center items-start h-full'>
        <div className='lg:w-[25%] md:w-[35%] w-[90%] sm:w-[70%] h-[60vh]'>
          <img src={bookFound.cover} alt={bookFound.title} className='w-full h-full object-cover' />
        </div>
        <div className='flex flex-col items-start justify-center text-start'>
          <h4 className='text-sm mt-2 text-white font-bold md:text-[38px] mb-2 text-[32px]'>{bookFound.title}</h4>
          <h4 className='text-sm mt-4 text-white md:text-[28px] text-[26px]'>By {bookFound.author}</h4>
          <h3 className='text-white mt-4 text-[18px] md:text-[28px]'>${bookFound.price}.00</h3>
          <div className='text-white flex gap-2 justify-center mt-2 p-2'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <span className='text-sm'>(120 Review)</span> </div>
          <button onClick={(e) => Addtocart(e, bookFound)} className='px-8 py-4 border rounded-[30px] text-[14px] text-black bg-white border-white mt-6 text-center'>Add to cart</button>
        </div>
      </div>
      <Navtab />
    </div>
  );
};

export default BookDetails;
