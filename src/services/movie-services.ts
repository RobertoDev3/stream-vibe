import axios from 'axios';

export async function getListMoviesGenres() {
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

export async function getMoviesByGenres(genreId: number) {
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

export async function getTrendingMoviesWeek({ page = 1 }: { page?: number }) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_TMDB_API_URL}/trending/all/week`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR',
        page: page,
      },
    },
  );

  return response.data.results;
}

export async function getNowPlayingMovies({ page }: { page?: number }) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_TMDB_API_URL}/movie/now_playing`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR',
        page: page,
      },
    },
  );
  return response.data.results;
}
