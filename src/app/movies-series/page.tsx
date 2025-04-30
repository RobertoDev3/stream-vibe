'use client';

import { CardContainerMoviesSeries } from '@/components/layout/card-container-movies-series';
import { Header } from './_components/header';
import { GenresCarousel } from '@/components/common/genres-carousel';
import { useAllCategorysMovies, useAllGenresMovies } from '@/hooks/use-movies';
import { CategorysCarousel } from '@/components/common/categorys-carousel';

export default function MoviesSeries() {
  const { allGenresMovies } = useAllGenresMovies();
  const { allCategorysMovies } = useAllCategorysMovies();

  const { topRatedMovies } = allCategorysMovies;

  return (
    <main className='space-y-25'>
      <Header />
      <CardContainerMoviesSeries title='Filmes'>
        <GenresCarousel genresMovies={allGenresMovies} title='Nossos gêneros' />
        <CategorysCarousel
          categorysMovies={topRatedMovies}
          title='Mais votados'
        />
      </CardContainerMoviesSeries>
    </main>
  );
}
