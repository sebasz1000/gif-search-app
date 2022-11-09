import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
const APIkey = "AhV9WN4q7ny59eg8vw0lQrvFGDbLAkgt";

export const GifSearchApp = () => {
  const [categories, setCategories] = useState(["OnePunch", "DragonBall"]);
  console.log(categories);

  const onAddCat = (value) => {
    setCategories([...categories, value]);
  };
  return (
    <>
      <h1>Gif Search App</h1>
      <ol>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ol>
      <AddCategory setCategories={setCategories} />
      <button>Add New Category</button>
    </>
  );
};
