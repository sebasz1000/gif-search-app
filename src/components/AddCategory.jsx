import { useState } from "react";

export const AddCategory = ({ onAddCategory, categories }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (value.length <= 1) return;

    onAddCategory(value);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Search Gifs"
        onChange={onInputChange}
      />
    </form>
  );
};
