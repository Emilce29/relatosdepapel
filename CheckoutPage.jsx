import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert("Compra completada!");
    clearCart();
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleCheckout}>Pagar</button>
    </div>
  );
};

export default CheckoutPage;
