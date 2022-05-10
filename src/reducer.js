// The initial state
export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  // Switch between action types
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case "REMOVE_FROM_CART":
      // Remove the first item matching what was removed
      const indexOfItemToRemove = state.basket.findIndex(
        (item) => item.id === action.payload
      );

      let redoneBasket = state.basket;
      redoneBasket.splice(indexOfItemToRemove, 1);

      return {
        ...state,
        basket: redoneBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    // Default
    default:
      return state;
  }
};

export default reducer;
