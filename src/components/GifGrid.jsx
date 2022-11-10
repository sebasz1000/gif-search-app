import { useState, useEffect } from "react";
import { GridItem } from "./GridItem";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  //const { images, isLoading } = useFetchGifs(category);

  const [gifs, setGifs] = useState([]);
  const loadGifs = async () => {
    const newGifs = await getGifs(category);
    setGifs(newGifs);
  };
  useEffect(() => {
    loadGifs();
  }, [category]);

  return (
    <>
      <h2>{category}</h2>
      {gifs.length > 0 ? (
        <GridCategory gifs={gifs} />
      ) : (
        <p className="text-muted">
          No results were found for <strong>"{category}"</strong>
        </p>
      )}
    </>
  );
};

const GridCategory = ({ gifs }) => {
  return (
    <section className="card-grid">
      {gifs.map((gif) => {
        return <GridItem {...gif} key={gif.id} />;
      })}
    </section>
  );
};
