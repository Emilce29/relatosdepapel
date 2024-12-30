import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Llama a la función onSearch con el término actual
  };

  return (
    <div className="search-bar mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar por título..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
