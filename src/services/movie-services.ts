import axios from 'axios';

export async function getMoviesHeader() {
  const [page1, page2, page3] = await Promise.all([
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
    axios.get(`${process.env.NEXT_PUBLIC_TMDB_API_URL}/discover/movie`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR',
        page: 3,
      },
    }),
  ]);

  const combined = [
    ...page1.data.results,
    ...page2.data.results,
    ...page3.data.results,
  ];

  return combined;
}

export async function getListMoviesCategorys() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_TMDB_API_URL}/genre/movie/list`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR',
      },
    },
  );

  return response.data.genres;
}

export async function getMoviesByCategory(genreId: number) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_TMDB_API_URL}/discover/movie`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR',
        with_genres: genreId,
      },
    },
  );

  return response.data.results;
}
