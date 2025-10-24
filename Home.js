import React from "react";
import "../assets/styles/home.css";
import garotaelivros from "../assets/images/garotaelivros.jpeg";

const Home = () => {
  return (
    <section id="home">
      <div id="cta">
        <h2 className="title">
          Para <span>ler</span> a qualquer hora
        </h2>
        <p className="description">
          Encontre o seu livro favorito para ler onde e quando quiser!
        </p>
        <div id="cta_button">
          <a href="#" className="btn-default">Explorar</a>
        </div>
      </div>

      <div id="banner">
        <img src={garotaelivros} alt="Garota lendo livros" />
      </div>
    </section>
  );
};

export default Home;
