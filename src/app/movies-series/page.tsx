'use client';

import { CardContainerMoviesSeries } from '@/components/layout/card-container-movies-series';
import { Header } from './_components/header';
import { GenresCarousel } from '@/components/common/genres-carousel';
import { useAllGenresMovies } from '@/hooks/use-movies';

export default function MoviesSeries() {
  const { allGenresMovies } = useAllGenresMovies();

  return (
    <main className='space-y-25'>
      <Header />
      <CardContainerMoviesSeries title='Filmes'>
        <GenresCarousel genresMovies={allGenresMovies} title='Nossos gêneros' />
      </CardContainerMoviesSeries>
    </main>
  );
}
