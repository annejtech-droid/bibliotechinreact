import React, { useState, useEffect } from "react";
import "../assets/styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  // Alterna menu mobile
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Adiciona/remover sombra no scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{ boxShadow: shadow ? "5px 1px 5px rgba(0, 0, 0, 0.1)" : "none" }}>
      <nav id="navbar">
        <h1 id="logo_nav">
          BIBLIO<span>TECH</span>
        </h1>

        <ul id="nav_list">
          <li className="nav-item active"><a href="#home">Início</a></li>
          <li className="nav-item"><a href="#livros">Livros</a></li>
        </ul>

        <button className="btn-default">Login</button>

        <button id="mobile_btn" onClick={toggleMenu}>
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile_menu" className="active">
          <ul id="mobile_nav_list">
            <li className="nav-item"><a href="#home">Início</a></li>
            <li className="nav-item"><a href="#livros">Livros</a></li>
          </ul>
          <button className="mobile_btn">Login</button>
        </div>
      )}
    </header>
  );
};

export default Header;
