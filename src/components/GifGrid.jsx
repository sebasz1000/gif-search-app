import { GridItem } from "./GridItem";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import loaderUrl from "./../assets/loader.gif";
export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <section>
        <h2 className="text-center text-capitalize text-muted">{category}</h2>

        {isLoading && (
          /*<img
            aria-label="loader"
            className="loader"
            src={loaderUrl}
            width="50px"
            alt="Loader image"
          /> PUT ME BACK AFTER TESTING*/
          <h4 className="text-white text-center">Loading...</h4>
        )}
        {gifs.length < 0 && !isLoading ? (
          <p className="text-muted">
            No results were found for <strong>"{category}"</strong>
          </p>
        ) : (
          <GridCategory gifs={gifs} />
        )}
      </section>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
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
