export const productReducer = (state, action) => {
  switch (action.type) {
    case "Search_Products": {
      return action.payload.productList.filter((product) =>
        product.title
          .toLowerCase()
          .includes(action.payload.searchText.toLowerCase())
      );
    }

    case "Sort_Products": {
      const sorted = [...state];
      const { sortBy } = action.payload;

      if (sortBy === "Most Popular") {
        sorted.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === "Newest") {
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (sortBy === "Price: Low to High") {
        sorted.sort((a, b) => a.price - b.price);
      } else if (sortBy === "Price: High to Low") {
        sorted.sort((a, b) => b.price - a.price);
      }

      return sorted;
    }
    case "Decrease_Stock":
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, stock: product.stock - 1 }
          : product
      );

    case "Increase_Stock":
      return state.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              stock: product.stock + (action.payload.quantity || 1),
            }
          : product
      );

    default:
      return state;
  }
};
