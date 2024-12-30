import React from "react";
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <div>
      <ProductList /> {/* La barra de búsqueda ya está dentro de ProductList */}
    </div>
  );
};

export default HomePage;
