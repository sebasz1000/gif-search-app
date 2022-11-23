import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs.js";

jest.mock("../../src/hooks/useFetchGifs.js");

describe("Test <GifGrid />", () => {
  const category = "Pokemon";

  test("Should show loader & category name", () => {
    useFetchGifs.mockReturnValue({
      isLoading: true,
      gifs: [],
    });
    render(<GifGrid category={category} />);
    const loader = screen.getByText("Loading...");
    const categoryTitle = screen.getByText(category);
    expect(loader).toBeTruthy();
    expect(categoryTitle).toBeTruthy();
    //screen.debug();
  });

  test("Should show items on useFetchGifs images load", () => {
    const gifs = [
      {
        id: "ÁBC",
        title: "Ash",
        url: "https://localhost/ash.jpg",
      },
      {
        id: "123",
        title: "Pikachu",
        url: "http:/localhost/pikachu.png",
      },
    ];
    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
    screen.debug();
  });
});
