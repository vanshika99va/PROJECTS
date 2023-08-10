import React from "react";
import Directory from "../components/directory/Directory.jsx";
import { categories } from "./categoriesData.js";

const App = () => {
  return <Directory categories={categories} />;
};

export default App;
