import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifSearchApp = () => {
  const [categories, setCategories] = useState([]);
  //console.log(categories);

  const onAddCat = (newCategory) => {
    //if (categories.includes(newCategory)) return;
    if (
      categories.find((cat) => cat.toLowerCase() === newCategory.toLowerCase())
    )
      return;

    setCategories([...categories, newCategory]);
  };
  return (
    <>
      <h1>Gif Search App</h1>
      <AddCategory onAddCategory={onAddCat} categories={categories} />
      <button>Add New Category</button>
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
