import { getMoviesDiscover } from '@/services/movie-services';
import { useQuery } from '@tanstack/react-query';

export function useMovies() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: getMoviesDiscover,
  });

  return {
    movies,
    isLoading,
    error,
  };
}
