'use client';

import { Header } from './_components/header';
import { Devices } from './_components/devices';
import { CategoriesCarousel } from '@/components/common/categories-carousel';
import { useAllCategoriesMovies } from '@/hooks/use-movies';
import { MoviesCategorysProps } from '@/types/movies';
import { FAQ } from './_components/faq';

export default function Home() {
  const {
    allCategoriesMovies,
  }: { allCategoriesMovies?: MoviesCategorysProps[] } =
    useAllCategoriesMovies();

  return (
    <main className='space-y-25'>
      <Header />
      <CategoriesCarousel
        id='categorys'
        categoriesMovies={allCategoriesMovies}
      />
      <Devices id='devices' />
      <FAQ />
    </main>
  );
}
