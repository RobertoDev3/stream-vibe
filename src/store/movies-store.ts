import { create } from 'zustand';
import { MovieProps } from '@/types/movies';

type MoviesStore = {
  movies: MovieProps[];
  setMovies: (movies: MovieProps[]) => void;
};

export const useMoviesStore = create<MoviesStore>(set => ({
  movies: [],
  setMovies: movies => set({ movies }),
}));
