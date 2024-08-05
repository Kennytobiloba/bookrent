import  { useContext } from 'react';
import { BookData } from '../../Components/Context';
import { toast } from 'react-toastify';

const Cart = () => {
  const { state, dispatch } = useContext(BookData);
  const { cartData } = state;

  const removeFromCart = (bookId) => {
    dispatch({
      type: "Remove from cart",
      payload: bookId  // Payload is just the ID, not an object
    });
    toast.success("Item removed from cart", { position: 'top-right' });
  };

  const totalCartValue = cartData.reduce((total, book) => total + book.price, 0);

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg">
      {cartData.length === 0 ? (
        <div className="text-center text-xl text-gray-700">Cart is empty</div>
      ) : (
        <div className="space-y-6">
          {cartData.map((book) => (
            <div key={book.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
              <img src={book.cover} alt={book.title} className="w-24 h-36 object-cover rounded-md mr-6" />
              <div className="flex-grow">
                <h4 className="text-lg font-bold text-gray-800">{book.title}</h4>
                <p className="text-gray-600">By {book.author}</p>
                <p className="text-gray-600">${book.price}.00</p>
              </div>
              <button
                onClick={() => removeFromCart(book.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right text-2xl font-bold text-gray-800">
            Total: ${totalCartValue}.00
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
