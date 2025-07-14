import { useContext } from "react";
import { CartContext, ProductContext } from "../../../Context";

const CartItem = ({ item }) => {
  const { cartDispatch } = useContext(CartContext);
  const { products, productsDispatch } = useContext(ProductContext);

  const productStock = products.find((p) => p.id === item.id)?.stock || 0;

  const handleIncrease = () => {
    if (productStock <= 0) return;

    cartDispatch({ type: "Increase_Quantity", payload: { id: item.id } });

    productsDispatch({ type: "Decrease_Stock", payload: { id: item.id } });
  };

  const handleDecrease = () => {
    if (item.quantity <= 1) return;

    cartDispatch({ type: "Decrease_Quantity", payload: { id: item.id } });

    productsDispatch({
      type: "Increase_Stock",
      payload: { id: item.id, quantity: 1 },
    });
  };

  const handleRemove = () => {
    cartDispatch({ type: "Remove_From_Cart", payload: { id: item.id } });

    productsDispatch({
      type: "Increase_Stock",
      payload: { id: item.id, quantity: item.quantity },
    });
  };
  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-auto object-cover"
        />
      </div>

      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.title}</h3>
          <button
            onClick={handleRemove}
            className="text-red-500 text-sm font-bold"
          >
            ×
          </button>
        </div>

        <p className="text-sm text-gray-500">Size: {item.size}</p>
        <p className="text-sm text-gray-500">Color: {item.color}</p>

        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">
            ${(item.price * item.quantity).toFixed(2)}
          </p>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecrease}
              disabled={item.quantity <= 1}
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
            >
              −
            </button>

            <span className="text-sm">{item.quantity}</span>

            <button
              onClick={handleIncrease}
              disabled={productStock <= 0}
              className={`w-6 h-6 ${
                productStock <= 0 ? "bg-gray-300" : "bg-gray-100"
              } rounded flex items-center justify-center`}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
