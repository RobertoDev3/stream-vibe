import {
  getListMoviesGenres,
  getMoviesByGenres,
  getMoviesHeader,
  getNowPlayingMovies,
} from '@/services/movie-services';
import { useMoviesStore } from '@/store/movies-store';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export function useMoviesHeader() {
  const zustandMovies = useMoviesStore(state => state.movies);
  const setMovies = useMoviesStore(state => state.setMovies);

  const { data, isLoading, error } = useQuery({
    queryKey: ['movies-for-header'],
    queryFn: getMoviesHeader,
    enabled: zustandMovies.length === 0,
  });

  useEffect(() => {
    if (data) setMovies(data);
  }, [data, setMovies]);

  return {
    movies: zustandMovies.length > 0 ? zustandMovies : data,
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
