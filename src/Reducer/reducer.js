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

    default:
      return state;
  }
};
