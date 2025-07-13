import Cart from "./Cart/Cart";
import ProductList from "./Products/ProductList";

const Shop = () => {
  return (
    <div className="w-10/12 mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default Shop;
