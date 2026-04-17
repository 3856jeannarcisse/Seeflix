const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getMoviesByType = async (type) => {
  const res = await fetch(
    `${BASE_URL}/movie/${type}?api_key=${API_KEY}`
  );
  const data = await res.json();
  return Array.isArray(data.results) ? data.results : [];
};

export const getPopularMovies = async () => {
  return getMoviesByType("popular");
};