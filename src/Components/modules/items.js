const ADD_CART = "items/ADD_CART";

const RESET_CART = "items/RESER_CART";
const RM_CART = "items/RM_CART";

export const addCart = id => ({
  type: ADD_CART,
  id
});

export const rmCart = id => ({
  type: RM_CART,
  id
});

export const resetCart = () => ({
  type: RESET_CART
});

const initialState = [[], [], [], []];

export default function items(state = initialState, action) {
  switch (action.type) {
    case ADD_CART: {
      state[action.id.id].push(action.id);
      // console.log(action.id);
      return state;
    }
    case RM_CART: {
      state[action.id].splice(-1, 1);
      // console.log(state);
      return state;
    }

    case RESET_CART: {
      let state = [[], [], [], []];
      return state;
    }

    default:
      return state;
  }
}
