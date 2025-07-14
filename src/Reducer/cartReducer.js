export const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      if (action.payload.stock <= 0) return state;
      return [...state, { ...action.payload, quantity: 1 }];

    case "Remove_From_Cart":
      return state.filter((item) => item.id !== action.payload.id);

    case "Increase_Quantity":
      return state.map((cartItem) =>
        cartItem.id === action.payload.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

    case "Decrease_Quantity":
      return state.map((cartItem) =>
        cartItem.id === action.payload.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );

    default:
      return state;
  }
};
