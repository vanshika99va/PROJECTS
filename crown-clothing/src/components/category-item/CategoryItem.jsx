import React from "react";
import "./CategoryItem.scss";

function CategoryItem({ key, title, imageUrl }) {
  return (
    <div className="category-container" key={key}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
