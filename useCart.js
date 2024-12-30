import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCart = () => {
  const { cart, addToCart, removeItem, clearCart } = useContext(CartContext);

  return { cart, addToCart, removeItem, clearCart };
};

export default useCart;
