import {
  getListMoviesCategorys,
  getMoviesByCategory,
  getMoviesHeader,
} from '@/services/movie-services';
import { useQuery } from '@tanstack/react-query';

export function useMoviesHeader() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: getMoviesHeader,
  });

  return {
    movies,
    isLoading,
    error,
  };
}

export function useCategoriesWithMovies() {
  const {
    data: categoriesWithMovies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categories-with-movies'],
    queryFn: async () => {
      const categories = await getListMoviesCategorys();

      const categoriesWithMovies = await Promise.all(
        categories.map(async (category: { id: number; name: string }) => {
          const movies = await getMoviesByCategory(category.id);

          return {
            idCategory: category.id,
            nameCategory: category.name,
            movies,
          };
        }),
      );

      return categoriesWithMovies;
    },
  });

  return {
    categoriesWithMovies,
    isLoading,
    error,
  };
}
