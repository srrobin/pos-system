/* eslint-disable no-fallthrough */
export const initialState = {
  cart: [],
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // eslint-disable-next-line no-case-declarations
      const check = state.cart.find((i) => i.id === action.payload.id);
      if (check) {
        return {
          ...state,
          cart: state.cart.map((i) => (i.id === action.payload.id ? {
            ...i,
            qty: i.qty + 1,
          } : i))
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }]
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload.id)
      };

    default:
      return state;
  }
};
