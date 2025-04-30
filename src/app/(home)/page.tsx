'use client';

import { Header } from './_components/header';
import { Devices } from './_components/devices';
import { CategoriesCarousel } from '@/components/common/categories-carousel';
import { useAllGenresMovies } from '@/hooks/use-movies';
import { MoviesCategorysProps } from '@/types/movies';
import { FAQ } from './_components/faq';
import { Pricing } from '@/components/layout/pricing';

export default function Home() {
  const { allGenresMovies }: { allGenresMovies?: MoviesCategorysProps[] } =
    useAllGenresMovies();

  return (
    <main className='space-y-25'>
      <Header />
      <CategoriesCarousel id='categorys' categoriesMovies={allGenresMovies} />
      <Devices id='devices' />
      <FAQ id='faq' />
      <Pricing id='pricing' />
    </main>
  );
}
