import axios from 'axios';

export async function getMoviesHeader() {
  const [page1, page2] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_TMDB_API_URL}/discover/movie`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR',
        page: 1,
      },
    }),
    axios.get(`${process.env.NEXT_PUBLIC_TMDB_API_URL}/discover/movie`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR',
        page: 2,
      },
    }),
  ]);

  const combined = [...page1.data.results, ...page2.data.results];

  return combined;
}
