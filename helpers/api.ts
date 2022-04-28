const BASE_URL = process.env.NEXT_PUBLIC_SCRYFALL_API_BASE_URL;

const fetcher = (resource) => {
  const url = `${BASE_URL}/${resource}`;
  return fetch(url).then((res) => res.json());
};

export { fetcher };
