import { useContext } from "react";
import { CartContext } from "../../../Context";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        )}

        <div className="mt-6">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
