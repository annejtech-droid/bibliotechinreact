import React from "react";
import "../assets/styles/searchbar.css";

const SearchBar = () => {
  return (
    <section>
      <div id="container">
        <div className="input-group">
          <div className="input-icon">search</div>
          <input id="search" type="text" className="input-field" placeholder="Pesquisar" />
        </div>
      </div>
      <ul className="items"></ul>
    </section>
  );
};

export default SearchBar;
