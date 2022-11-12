import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadGifs = async () => {
    const newGifs = await getGifs(category);
    setTimeout(() => {
      setGifs(newGifs);
      setIsLoading(false);
    }, 600);
  };
  useEffect(() => {
    loadGifs();
  }, [category]);

  return {
    gifs,
    isLoading,
  };
};
