import React from "react";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { cart, removeItem, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("¡Compra realizada con éxito!");
    clearCart();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary"></h2>
      {cart.length === 0 ? (
        <div className="alert alert-info">Tu carrito está vacío.</div>
      ) : (
        <div>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                  {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
                </span>
                <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h3 className="mt-3">Total: ${total}</h3>
          <button className="btn btn-success mt-3" onClick={handleCheckout}>
            Pagar ahora
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
