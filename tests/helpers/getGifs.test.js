import { getGifs } from "../../src/helpers/getGifs";
describe("Tests getGifs.js helper", () => {
  test("Should return an array of gifs by argument category", async () => {
    const gifs = await getGifs("pokemon");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
