import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Evita valores menores a 1
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      alert(`${quantity} x ${product.name} añadido al carrito.`);
      setQuantity(1); // Reinicia la cantidad
    } else {
      alert("Por favor selecciona una cantidad válida.");
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-primary">{product.name}</h5>
        <p className="card-text text-muted">Precio: ${product.price}</p>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary btn-sm" onClick={decrement}>
            -
          </button>
          <input
            type="number"
            className="form-control mx-2 text-center"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={{ width: "60px" }}
            min="1"
          />
          <button className="btn btn-outline-secondary btn-sm" onClick={increment}>
            +
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button className="btn btn-primary btn-sm" onClick={handleAddToCart}>
            Añadir al carrito
          </button>
          <Link to={`/book/${product.id}`} className="btn btn-outline-secondary btn-sm">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
