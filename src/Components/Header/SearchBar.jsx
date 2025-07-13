import { useContext } from "react";
import SearchIcon from "../../Icons/SearchIcon";
import { ProductContext } from "../../Context";
import productList from "../../data/initialProducts";

const SearchBar = () => {
  const { setProducts } = useContext(ProductContext);

  function handleSearchProduct(searchText) {
    const result = productList.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setProducts([...result]);
  }

  return (
    <>
      <input
        onChange={(e) => handleSearchProduct(e.target.value)}
        type="text"
        placeholder="Search for products..."
        className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
      />
      <span className="absolute right-3 top-2">
        <SearchIcon />
      </span>
    </>
  );
};

export default SearchBar;
