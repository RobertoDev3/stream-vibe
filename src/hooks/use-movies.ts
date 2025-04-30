import {
  getListMoviesGenres,
  getMoviesByGenres,
  getTrendingMoviesWeek,
  getNowPlayingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getPopularMovies,
} from '@/services/movie-services';
import {
  useAllCategorysMoviesStore,
  useTrendingMoviesWeekForHeaderStore,
} from '@/store/movies-store';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export function useTrendingMoviesWeekForHeader() {
  const movies = useTrendingMoviesWeekForHeaderStore(state => state.movies);
  const setMovies = useTrendingMoviesWeekForHeaderStore(
    state => state.setMovies,
  );

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
  const movies = useAllCategorysMoviesStore(state => state.movies);
  const setMovies = useAllCategorysMoviesStore(state => state.setMovies);

  const {
    data: fetchedMoviesCategorys,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['all-categorys-movies'],
    queryFn: async () => {
      const data = await Promise.all([
        getTrendingMoviesWeek({ page: 1 }),
        getNowPlayingMovies({ page: 1 }),
        getPopularMovies({ page: 1 }),
        getTopRatedMovies({ page: 1 }),
        getUpcomingMovies({ page: 1 }),
      ]);

      return {
        trendingMoviesAndSeries: data[0],
        nowPlayingMovies: data[1],
        popularMovies: data[2],
        topRatedMovies: data[3],
        upcomingMovies: data[4],
      };
    },
    enabled:
      movies.trendingMoviesAndSeries.length === 0 &&
      movies.nowPlayingMovies.length === 0 &&
      movies.popularMovies.length === 0 &&
      movies.topRatedMovies.length === 0 &&
      movies.upcomingMovies.length === 0,
  });

  useEffect(() => {
    const isMoviesEmpty =
      movies.trendingMoviesAndSeries.length === 0 &&
      movies.nowPlayingMovies.length === 0 &&
      movies.popularMovies.length === 0 &&
      movies.topRatedMovies.length === 0 &&
      movies.upcomingMovies.length === 0;

    if (fetchedMoviesCategorys && isMoviesEmpty) {
      setMovies(fetchedMoviesCategorys);
    }
  }, [fetchedMoviesCategorys, movies, setMovies]);

  return {
    allCategorysMovies: movies,
    isLoading,
    error,
  };
}
