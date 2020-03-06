const NUM_CART = "items/NUM_CART";
const RS_CART = "items/RS_CART";
const RMNUM_CART = "items/RMNUM_CART";

export const numCart = id => ({
  type: NUM_CART,
  id
});

export const rmnumCart = () => ({
  type: RMNUM_CART
});

export const reset_Cart = id => ({
  type: RS_CART,
  id
});

const initialState = [];

export default function items_num(state = initialState, action) {
  switch (action.type) {
    case NUM_CART: {
      // console.log(state);
      return state.concat(action.id);
    }
    case RS_CART: {
      let state = [];
      return state;
    }
    case RMNUM_CART: {
      return state;
    }

    default:
      return state;
  }
}
