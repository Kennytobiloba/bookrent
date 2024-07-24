const initialState = {
    cartData: [],
    bookMarkedBooks: [],
  };
  
  const CartReducers = (state, action) => {
    switch (action.type) {
      case "Add_To_Cart":
        console.log(state);
        console.log(action);
        return {
          ...state,
          cartData: [...state.cartData, action.payload],
        };
        case "REMOVE_FROM_CART":
          return {
              ...state,
              cartData: state.cartData.filter(x => x.id !== action.payload.id)
          }
  
      case "TOGGLE_BOOKMARK": {
        console.log(state);
        console.log(action);
        
        const bookIndex = state.bookMarkedBooks.findIndex((book) => book.id === action.payload.id);
        if (bookIndex === -1) {
          return {
            ...state,
            bookMarkedBooks: [...state.bookMarkedBooks, action.payload],
          };
        } else {
          const updatedBookmarkedBooks = [...state.bookMarkedBooks];
          updatedBookmarkedBooks.splice(bookIndex, 1); // Correct way to remove the item
          return {
            ...state,
            bookMarkedBooks: updatedBookmarkedBooks,
          };
        }
      }
  
      default:
        return state;
    }
  };
  
  export {
    initialState,
    CartReducers,
  };
  