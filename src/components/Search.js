import React from "react";

const Search = ({ setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input type="text" placeholder="🔎 Buscar..." onChange={handleSearch} />
  );
};

export default Search;
