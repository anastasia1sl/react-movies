import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWFiYWViMDBlNjk5YWY3MWVkOTVmMzE5MTVkZmMzYiIsInN1YiI6IjY1OTViYmQyZDdhNzBhMTIyZTY5NzllOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u9An4CUuI7ZJfkrsv0Fy0F0AKnSUVWfJWd3Y9q92nIs";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export async function getTrandingMovies() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );

  return response.data.results;
}

export async function searchMovies(searchQuery) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
    options
  );

  return response.data.results;
}

export async function getSingleMovie(movie_id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}`,
    options
  );

  return response.data;
}

export async function getCast(movie_id) {
  const repsonse = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
    options
  );

  return repsonse.data;
}

export async function getReviews(movie_id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
    options
  );

  return response.data.results;
}
