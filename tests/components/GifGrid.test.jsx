import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe("Test <GifGrid />", () => {
  const category = "Pokemon";

  test("Should show loader & category name", () => {
    render(<GifGrid category={category} />);
    const loader = screen.getByText("Loading...");
    const categoryTitle = screen.getByText(category);
    expect(loader).toBeTruthy();
    expect(categoryTitle).toBeTruthy();
    //screen.debug();
  });
});
