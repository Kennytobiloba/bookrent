const initialState = {
    cartData : []

};
const Reducer = (state,action) => {
    switch (action.type) {
        case "Add to cart":
         console.log(state);
        
         return{
            ...state,
            cartData:[...state.cartData, action.payload]
         };
         case "Remove from cart":
      console.log('Removing book with ID:', action.payload);
    return {
        ...state,
        cartData: state.cartData.filter(book => book.id !== action.payload)
    };




    }
}
export {
    initialState,
    Reducer,

}