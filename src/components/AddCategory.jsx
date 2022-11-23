import { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (value.length < 2) return;

    onAddCategory(value);
    setInputValue("");
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Search Gifs"
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
