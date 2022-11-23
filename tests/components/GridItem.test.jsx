import { render, screen } from "@testing-library/react";
import { GridItem } from "../../src/components/GridItem";
describe("Tests <GridItem />", () => {
  const name = "Ash",
    url =
      "https://media1.giphy.com/media/G9qfCvxlwGAaQ/giphy.gif?cid=cc5384774mwbhb1qqlv1fa6vi6l0dr6dszwjdwci3ceta1va&rid=giphy.gif&ct=g";
  test("Should match with snapshot", () => {
    const { container } = render(<GridItem id={name} title={name} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Should show image with specified url and alt text", () => {
    render(<GridItem id={name} title={name} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(name);
    //screen.debug();
  });

  test("Should display components title", () => {
    render(<GridItem id={name} title={name} url={url} />);
    expect(screen.getByText(name)).toBeTruthy();
  });
});
