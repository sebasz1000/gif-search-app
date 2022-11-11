import { GridItem } from "./GridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);
  console.log(isLoading);
  return (
    <>
      <h2>{category}</h2>

      {isLoading && (
        <img src="../../public/loader.gif" width="150px" alt="Loader image" />
      )}
      {gifs.length < 0 && !isLoading ? (
        <p className="text-muted">
          No results were found for <strong>"{category}"</strong>
        </p>
      ) : (
        <GridCategory gifs={gifs} />
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
