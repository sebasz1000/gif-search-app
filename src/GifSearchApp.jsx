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
      <div className="container">
        <header className="mx-auto">
          <h1 className="text-center text-white">Gif Search App</h1>
          <AddCategory onAddCategory={onAddCat} categories={categories} />
        </header>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </div>
    </>
  );
};
