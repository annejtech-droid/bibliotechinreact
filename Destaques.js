import React from "react";
import "../assets/styles/destaques.css";
import DishCard from "./DishCard";
import dishImage from "../assets/images/dish.png";

const Destaques = () => {
  const destaques = [
    { title: "Tecnologia", description: "Aprenda a desenvolver e inovar através da leitura", image: dishImage },
    { title: "Filosofia", description: "Leia as obras e as ideias que te ajudam a pensar" },
    { title: "Educação", description: "Livros sobre educação para se inspirar e aprender." },
    { title: "Clássicos", description: "Leia os grandes clássicos da literatura" },
  ];

  return (
    <section id="destaques">
      <h2 className="section-title">Destaques</h2>
      <div id="dishes">
        {destaques.map((d, i) => (
          <DishCard key={i} {...d} />
        ))}
      </div>
    </section>
  );
};

export default Destaques;
