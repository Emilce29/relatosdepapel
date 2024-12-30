import React, { useContext, useState } from "react";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { ProductsContext } from "../context/ProductsContext";

const ProductList = () => {
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(products); // Muestra todos los libros si el término de búsqueda está vacío
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container mt-4">
      <SearchBar onSearch={handleSearch} /> {/* Solo se renderiza aquí */}
      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductItem product={product} />
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-center text-muted">No se encontraron libros.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
