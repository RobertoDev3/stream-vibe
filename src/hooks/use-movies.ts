import {
  getListMoviesCategorys,
  getMoviesByCategory,
  getMoviesHeader,
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

export function useAllCategoriesMovies() {
  const {
    data: allCategoriesMovies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categories-with-movies'],
    queryFn: async () => {
      const categories = await getListMoviesCategorys();

      const allCategoriesMovies = await Promise.all(
        categories.map(async (category: { id: number; name: string }) => {
          const movies = await getMoviesByCategory(category.id);

          return {
            idCategory: category.id,
            nameCategory: category.name,
            movies,
          };
        }),
      );

      return allCategoriesMovies;
    },
  });

  return {
    allCategoriesMovies,
    isLoading,
    error,
  };
}
