import React from "react";
import CategoryItem from "../category-item/CategoryItem";
import "./Directory.scss";

function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default Directory;
