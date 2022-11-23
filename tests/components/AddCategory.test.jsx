import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Tests in <AddCategory />", () => {
  const inputValue = "Ash";
  test("Should change input text value", () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, {
      target: {
        value: inputValue,
      },
    });
    expect(input.value).toBe(inputValue);
    //screen.debug();
  });

  test("Should call onNewCategory if input ha a value", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onAddCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("Shouldn't call onAddCategory if form doesn't have proper value", () => {
    const badInputValue = "a";
    const onAddCategory = jest.fn();
    render(<AddCategory onAddCategory={onAddCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: badInputValue } });
    fireEvent.submit(form);
    //expect(onAddCategory).toHaveBeenCalledTimes(0);
    expect(onAddCategory).not.toHaveBeenCalled();
  });
});
