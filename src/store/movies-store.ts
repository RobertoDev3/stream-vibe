import { create } from 'zustand';
import { AllCategorysMoviesProps, MovieProps } from '@/types/movies';

type TrendingMoviesWeekForHeaderStoreProps = {
  movies: MovieProps[];
  setMovies: (movies: MovieProps[]) => void;
};

type AllCategorysMoviesStoreProps = {
  movies: AllCategorysMoviesProps;
  setMovies: (movies: AllCategorysMoviesProps) => void;
};

export const useTrendingMoviesWeekForHeaderStore =
  create<TrendingMoviesWeekForHeaderStoreProps>(set => ({
    movies: [],
    setMovies: movies => set({ movies }),
  }));

export const useAllCategorysMoviesStore = create<AllCategorysMoviesStoreProps>(
  set => ({
    movies: {
      trendingMoviesAndSeries: [],
      nowPlayingMovies: [],
      popularMovies: [],
      topRatedMovies: [],
      upcomingMovies: [],
    },
    setMovies: movies => set({ movies }),
  }),
);
