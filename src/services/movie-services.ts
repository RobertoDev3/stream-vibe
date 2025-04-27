import axios from 'axios';

export async function getMoviesDiscover() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_TMDB_API_URL}/discover/movie`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR',
      },
    },
  );

  return response.data.results;
}
