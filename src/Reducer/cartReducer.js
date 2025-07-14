export const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      if (action.payload.stock <= 0) return state;
      return [...state, { ...action.payload, quantity: 1 }];

    case "Remove_From_Cart":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};
