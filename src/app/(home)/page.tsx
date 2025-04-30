'use client';

import { Header } from './_components/header';
import { Devices } from './_components/devices';
import { GenresCarousel } from '@/components/common/genres-carousel';
import { useAllGenresMovies } from '@/hooks/use-movies';
import { GenresMoviesProps } from '@/types/movies';
import { FAQ } from './_components/faq';
import { Pricing } from '@/components/layout/pricing';

export default function Home() {
  const { allGenresMovies }: { allGenresMovies?: GenresMoviesProps[] } =
    useAllGenresMovies();

  return (
    <main className='space-y-25'>
      <Header />
      <GenresCarousel id='categorys' genresMovies={allGenresMovies} />
      <Devices id='devices' />
      <FAQ id='faq' />
      <Pricing id='pricing' />
    </main>
  );
}
