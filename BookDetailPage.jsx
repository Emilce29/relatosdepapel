import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

const BookDetailPage = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const book = products.find((product) => product.id === parseInt(id));

  if (!book) {
    return <p>¡Libro no encontrado!</p>;
  }

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Evita valores menores a 1
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(book, quantity);
      alert(`${quantity} x ${book.name} añadido al carrito.`);
      navigate("/cart");
    } else {
      alert("Por favor selecciona una cantidad válida.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <img
          src={book.image}
          alt={book.name}
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h1 className="card-title">{book.name}</h1>
          <p className="card-text">{book.description}</p>
          <p className="card-text text-muted">Precio: ${book.price}</p>
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
          <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
