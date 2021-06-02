export const initialState = {
  cart: [],
  user:null
};

//Reducer :
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      //login for add to 🛒:
      return { 
        ...state,
        cart:[...state.cart,action.item]
       };

    case "REMOVE_RROM_CART":
      //logic for remove product from 🛒:
      return { state };

    default:
      return state;
  }
};
export default reducer;
