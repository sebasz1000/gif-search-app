export const getGifs = async (category) => {
  const APIkey = "AhV9WN4q7ny59eg8vw0lQrvFGDbLAkgt";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${category}&limit=5`;
  const res = await fetch(url);
  const { data = [] } = await res.json();
  return data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
};
