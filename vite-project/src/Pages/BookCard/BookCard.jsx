import { useContext, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { BooksContext } from '../../Context';
import 'react-toastify/dist/ReactToastify.css';
import BookModalDetals from '../BookModalDetals/BookModalDetals';

const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const { state, dispatch } = useContext(BooksContext);

  function handleBookSelection(book) {
    setSelectedBook(book);
    setShowModal(true);
}

function handleModalClose() {
    setSelectedBook(null);
    setShowModal(false);
}


  function Addcart(event, book) {
    event.stopPropagation();
    const founds = state.cartData.find((item) => item.id === book.id);
    if (!founds) {
      dispatch({
        type: 'Add_To_Cart',
        payload: { ...book },
      });
      toast.success(`Added ${book?.title} to Cart!`, {
        position: 'top-right',
      });
    } else {
      toast.error(`The book ${book?.title} has already been added to the cart`, {
        position: 'top-right',
      });
    }
  }

  function handleBookmarkToggle(e, book) {
    e.stopPropagation();
    dispatch({
      type: 'TOGGLE_BOOKMARK',
      payload: book,
    });
  }

  return (
   <div>
    {
      showModal ? <BookModalDetals
      book={selectedBook}
      onClose={handleModalClose}
      onCartAdd={Addcart}
      
      /> : ""
    }
     <div className='p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl'>
      <div className='relative'>
        <button
          onClick={(e) => handleBookmarkToggle(e, book)}
          className={`absolute top-2 right-2 p-1 ${
            state.bookMarkedBooks.filter((b) => b.id === book.id).length > 0 ? 'text-green-500' : ''
          }`}
        >
          <FaHeart />
        </button>
        <img  onClick={() => handleBookSelection(book)} className="h-96 object-cover" src={book?.cover} alt={book?.title} />
      </div>
      <figcaption className="pt-4" onClick={() => handleBookSelection(book)}>
        <h3 className="text-xl mb-1">{book?.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{book?.genre}</p>
        <div className="flex items-center space-x-1 mb-5"></div>
        <button
          onClick={(e) => Addcart(e, book)}
          className="bg-blue-600 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
        >
          <img src="./assets/tag.svg" alt="" />
          <span className=''>${book?.price} | Add to Cart</span>
        </button>
      </figcaption>
    </div>
   </div>
  );
};

export default BookCard;
