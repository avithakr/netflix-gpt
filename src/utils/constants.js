export const LOGO =
  'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const PHOTOURL =
  'https://lh3.googleusercontent.com/a/ACg8ocITHemo-EoSSedE6wOK19ZvnqsLrqZXx8hP6W4evSgy4XkjetVN=s96-c';

export const URL =
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_API_TMDB_KEY,
  },
};

export const IMAGE_CDN_URL = 'https://image.tmdb.org/t/p/w500/';

export const POPULAR_MOVIE_URL =
  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export const SUPPORTED_LANGUAGES = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hindi', name: 'Hindi' },
  { identifier: 'spanish', name: 'Spanish' },
];

export const OPENAI_GPT_KEY = import.meta.env.VITE_API_OPENAI_GPT_KEY;

export function getMovieSearchUrl(movie) {
  return `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1'`;
}
