'use client';

import { Header } from './_components/header';
import { Devices } from './_components/devices';
import { GenresCarousel } from '@/components/common/genres-carousel';
import { useAllGenresMovies } from '@/hooks/use-movies';
import { GenresMoviesProps } from '@/types/movies';
import { FAQ } from './_components/faq';
import { Pricing } from '@/components/layout/pricing';
import { Container } from '@/components/layout/container';
import Loading from '../loading';

export default function Home() {
  const {
    allGenresMovies,
    isLoading,
  }: { allGenresMovies?: GenresMoviesProps[]; isLoading: boolean } =
    useAllGenresMovies();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className='space-y-25'>
      <Header />
      <Container>
        <GenresCarousel
          id='categorys'
          genresMovies={allGenresMovies}
          title='Explore nossa grande variedade de filmes'
          description='Se você está procurando uma comédia para fazer você rir, um drama
              para fazer você pensar ou um documentário para aprender algo novo.'
        />
      </Container>
      <Devices id='devices' />
      <FAQ id='faq' />
      <Pricing id='pricing' />
    </main>
  );
}
