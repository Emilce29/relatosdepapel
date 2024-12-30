import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige automáticamente a la página principal después de 5 segundos
    const timer = setTimeout(() => {
      navigate("/books"); // Asegúrate de que esta ruta exista
    }, 5000);

    // Limpia el temporizador si el componente se desmonta antes de que se complete
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-page d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="text-primary">¡Bienvenido a Relatos de Papel!</h1>
      <p className="text-muted">Explora nuestro catálogo de libros y encuentra tus próximos relatos favoritos.</p>
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/books")} // Redirige manualmente a la página principal
      >
        Ir al catálogo
      </button>
    </div>
  );
};

export default LandingPage;
