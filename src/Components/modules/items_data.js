const DATA = "items/DATA";
const GET_CART = "items/RM_CART";

export const getCart = id => ({
  type: GET_CART,
  id
});

const initialState = [
  { id: 0, name: "Tabatha", desc: "8살입니다." },
  { id: 1, name: "Marietta", desc: "14살입니다." },
  { id: 2, name: "Valerie", desc: "5살입니다." },
  { id: 3, name: "Helene", desc: "12살입니다." }
];

export default function items_data(state = initialState, action) {
  switch (action.type) {
    case DATA: {
      return state;
    }

    default:
      return state;
  }
}
