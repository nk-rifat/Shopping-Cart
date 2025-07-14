import { useContext } from "react";
import Button from "../../Button/Button";
import Rating from "./Rating";
import { CartContext, ProductContext } from "../../../Context";

const ProductCard = ({ product }) => {
  const { cart, cartDispatch } = useContext(CartContext);
  const {productsDispatch } = useContext(ProductContext);

  const inCart = cart.find((item) => item.id === product.id);

  function handleAddToCart(product) {
    if (product.stock <= 0) return;

    cartDispatch({ type: "Add_To_Cart", payload: product });

    productsDispatch({ type: "Decrease_Stock", payload: { id: product.id } });
  }

  function handleRemoveFromCart(product) {
    const cartItem = cart.find((item) => item.id === product.id);

    cartDispatch({ type: "Remove_From_Cart", payload: product });

    productsDispatch({
      type: "Increase_Stock",
      payload: { id: product.id, quantity: cartItem?.quantity || 1 },
    });
  }

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={product.img}
          alt={product.title}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.title} </h3>
        <div className="flex items-center justify-between">
          <Rating value={product.rating} />
          <span className="text-xs text-gray-700">
            ({product.stock} pcs left)
          </span>
        </div>
        <p className="font-bold">${product.price} </p>
        {inCart ? (
          <Button onClick={() => handleRemoveFromCart(product)} type="danger">
            Remove From Cart
          </Button>
        ) : (
          <Button
            onClick={() => handleAddToCart(product)}
            disabled={product.stock <= 0}
            type={product.stock <= 0 ? "disabled" : "primary"}
          >
            Add To Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
