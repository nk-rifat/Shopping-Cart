import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../../../Context";

const ProductList = () => {
  const { products, setProducts } = useContext(ProductContext);

  const handleSort = (e) => {
    const value = e.target.value;
    let sortedProducts = [...products];

    if (value === "Most Popular") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (value === "Newest") {
      sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (value === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
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
