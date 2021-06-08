export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

//Reducer :
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_CART":
      //logic for add to 🛒:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      //logic for remove product from 🛒:
      let newCart = [...state.cart];
      let index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
      if (index >= 0) {
        //item exist in cart and remove it 🔥;
        newCart.splice(index, 1);
      } else {
        console.error(
          `Con't remove product (${action.id} as its no longer exists.)`
        );
      }
      return { ...state, cart: newCart };

    default:
      return state;
  }
};
export default reducer;
