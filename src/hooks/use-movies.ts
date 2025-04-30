import {
  getListMoviesGenres,
  getMoviesByGenres,
  getTrendingMoviesWeek,
  getNowPlayingMovies,
} from '@/services/movie-services';
import { useMoviesStore } from '@/store/movies-store';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export function useTrendingMoviesWeekForHeader() {
  const movies = useMoviesStore(state => state.movies);
  const setMovies = useMoviesStore(state => state.setMovies);

  const {
    data: fetchedMovies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['movies-for-header'],
    queryFn: async () => {
      const [page1, page2, page3] = await Promise.all([
        getTrendingMoviesWeek({ page: 1 }),
        getTrendingMoviesWeek({ page: 2 }),
        getTrendingMoviesWeek({ page: 3 }),
      ]);

      return [...page1, ...page2, ...page3];
    },
    enabled: movies.length === 0,
  });

  useEffect(() => {
    if (fetchedMovies && movies.length === 0) {
      setMovies(fetchedMovies);
    }
  }, [fetchedMovies, movies.length, setMovies]);

  return {
    movies: movies.length > 0 ? movies : fetchedMovies,
    isLoading,
    error,
  };
}

export function useAllGenresMovies() {
  const {
    data: allGenresMovies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['genres-with-movies'],
    queryFn: async () => {
      const categories = await getListMoviesGenres();

      const allGenresMovies = await Promise.all(
        categories.map(async (category: { id: number; name: string }) => {
          const movies = await getMoviesByGenres(category.id);

          return {
            idCategory: category.id,
            nameCategory: category.name,
            movies,
          };
        }),
      );

      return allGenresMovies;
    },
  });

  return {
    allGenresMovies,
    isLoading,
    error,
  };
}

export function useAllCategorysMovies() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['all-categorys-movies'],
    queryFn: getNowPlayingMovies,
  });

  return {
    allCategorysMovies: data,
    isLoading,
    error,
  };
}
