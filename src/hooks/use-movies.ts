import {
  getListMoviesGenres,
  getMoviesByGenres,
  getTrendingMoviesWeek,
  getNowPlayingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getPopularMovies,
  getMovieDetails,
} from '@/services/movie-services';
import {
  useAllCategorysMoviesStore,
  useTrendingMoviesWeekForHeaderStore,
} from '@/store/movies-store';
import { MovieProps } from '@/types/movies';
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
    staleTime: 1000 * 60 * 60 * 2, // Cache for 2 hours
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
    staleTime: 1000 * 60 * 60 * 2, // Cache for 2 hours
  });

  return {
    allGenresMovies,
    isLoading,
    error,
  };
}

export function useTrendingMoviesWeek() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['trending-movies-week'],
    queryFn: () => {
      return getTrendingMoviesWeek({ page: 1 });
    },
    staleTime: 1000 * 60 * 60 * 2, // Cache for 2 hours
  });

  return {
    TrendingMoviesWeek: data,
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
      const [nowPlaying, popular, topRated, upcoming] = await Promise.all([
        getNowPlayingMovies({ page: 1 }),
        getPopularMovies({ page: 1 }),
        getTopRatedMovies({ page: 1 }),
        getUpcomingMovies({ page: 1 }),
      ]);

      const fetchDetails = async (items: MovieProps[]) => {
        const details = await Promise.allSettled(
          items.map(item => {
            if (item.media_type === 'tv') {
              return Promise.resolve(item);
            }
            return getMovieDetails(item.id);
          }),
        );

        return details
          .filter(res => res.status === 'fulfilled')
          .map(res => res.value);
      };

      const [
        nowPlayingDetailed,
        popularDetailed,
        topRatedDetailed,
        upcomingDetailed,
      ] = await Promise.all([
        fetchDetails(nowPlaying),
        fetchDetails(popular),
        fetchDetails(topRated),
        fetchDetails(upcoming),
      ]);

      return {
        nowPlayingMovies: nowPlayingDetailed,
        popularMovies: popularDetailed,
        topRatedMovies: topRatedDetailed,
        upcomingMovies: upcomingDetailed,
      };
    },
    enabled:
      movies.nowPlayingMovies.length === 0 &&
      movies.popularMovies.length === 0 &&
      movies.topRatedMovies.length === 0 &&
      movies.upcomingMovies.length === 0,
    staleTime: 1000 * 60 * 60 * 2, // Cache for 2 hours
  });

  useEffect(() => {
    const isMoviesEmpty =
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
