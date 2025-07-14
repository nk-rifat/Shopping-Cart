import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../../../Context";

const ProductList = () => {
  const { products, dispatch } = useContext(ProductContext);

  const handleSort = (e) => {
    dispatch({
      type: "Sort_Products",
      payload: { sortBy: e.target.value },
    });
  };
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort by:</span>
          <select
            onChange={handleSort}
            className="border rounded-md px-2 py-1 text-sm"
          >
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
