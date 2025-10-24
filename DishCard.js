import React from "react";

const DishCard = ({ title, description, image }) => {
  return (
    <div className="dish">
      {image && <img src={image} className="dish-image" alt={title} />}
      <h3 className="dish-title">{title}</h3>
      <span className="dish-description">{description}</span>
    </div>
  );
};

export default DishCard;
